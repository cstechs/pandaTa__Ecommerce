//const cartRepository = require('./repository.js')
const Product = require("../models/Product");
const car = require("../middleware/db");
const { data } = require("jquery");

exports.addItemToCart = async (req, res) => {
  const { productId, createdBy } = req.body;

  const quantity = Number.parseInt(req.body.quantity);
  try {
    let cart = await car.cart1(createdBy);

    // let id = req.params.id;
    let productDetails = await Product.findById({ _id: productId });
    if (!productDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }

    //--If cart exists ----
    if (cart) {
      //---- Check if index exists ----
      const indexFound = cart.items.findIndex(
        (item) => item.productId.id == productId
      );
      //------This removes an item from the the cart if the quantity is set to zero, We can use this method to remove an item from the list  -------
      if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.splice == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        }
      }
      //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity =
          cart.items[indexFound].quantity + quantity;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * productDetails.productPrice;
        cart.items[indexFound].price = productDetails.productPrice;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----------Check if product exist, just remove the previous quantity with the new quantity and update the total price-------
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity =
          cart.items[indexFound].quantity - quantity;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * productDetails.productPrice;
        cart.items[indexFound].price = productDetails.productPrice;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----Check if quantity is greater than 0 then add item to items array ----
      else if (quantity > 0) {
        cart.items.push({
          productId: productId,
          quantity: quantity,
          price: productDetails.productPrice,
          total: parseInt(productDetails.productPrice * quantity),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----If quantity of price is 0 throw the error -------
      else {
        return res.status(400).json({
          type: "Invalid",
          msg: "Invalid request",
        });
      }
      let data = await cart.save();
      res.status(200).json({
        type: "success",
        mgs: "Item Successfully added to cart",
        data: data,
      });
    }
    //------------ This creates a new cart and then adds the item to the cart that has been created------------
    else {
      const cartData = {
        items: [
          {
            productId: productId,
            quantity: quantity,
            total: parseInt(productDetails.productPrice * quantity),
            price: productDetails.productPrice,
          },
        ],
        createdBy: createdBy,
        subTotal: parseInt(productDetails.productPrice * quantity),
      };
      cart = await car.addItem(cartData);
      // let data = await cart.save();
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      err: err,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    let cart = await car.cart();
    if (!cart) {
      return res.status(400).json({
        type: "Invalid",
        msg: "Cart not found",
      });
    }
    res.status(200).json({
      status: true,
      data: cart,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something went wrong",
      err: err,
    });
  }
};

// exports.emptyCart = async (req, res) => {
//   try {
//     let cart = await car.cart();
//     cart.items = [];
//     cart.subTotal = 0;
//     let data = await cart.save();
//     res.status(200).json({
//       type: "Success",
//       mgs: "Cart has been emptied",
//       data: data,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       type: "Invalid",
//       msg: "Something went wrong",
//       err: err,
//     });
//   }
// };

exports.removeProductCart = async (req, res) => {
  var cartId = req.params.id;
  console.log("cart", cartId);

  try {
    let cart = await car.cart1(cartId);

    let productDetails = await Product.findById(productId);

    let indexFound = cart.items.findIndex(
      (item) => item.productId.id == productId
    );

    if (!productDetails) {
      return res
        .status(500)
        .json({ type: "Not found", msg: "invalid request" });
    }

    if (cart) {
      if (indexFound !== -1) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        }
      } else {
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      await cart.save();

      return res.status(200).json({ type: "deleted Product", data: cart });
    } else {
      return res
        .status(500)
        .json({ type: "Not found", msg: "invalid request" });
    }
  } catch (err) {
    return err;
  }
};

exports.subtractQuantityCart = async (req, res) => {
  const { productId, cartId } = req.body;
  try {
    let cart = await car.cart1(cartId);
    //let cart = await car.cart();
    let quantity = await cart.items.quantity;
    let productDetails = await Product.findById({ _id: productId });

    if (!productDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }

    //if cart Exists ---

    if (cart) {
      //---- check if index exists ----
      const indexFound = cart.items.findIndex(
        (item) => item.productId.id == productId
      );
      //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  -------
      if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        }
      }
      //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity = cart.items[indexFound].quantity - 1;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * productDetails.productPrice;
        cart.items[indexFound].price = productDetails.productPrice;
        cart.items[indexFound].image = productDetails.productImage;
        cart.items[indexFound].name = productDetails.productName;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----Check if Quantity is Greater than 0 then add item to items Array ----
      else if (quantity > 0) {
        cart.items.push({
          name: name,
          productId: productId,
          quantity: quantity,
          price: productDetails.price,
          image: image,
          total: parseInt(productDetails.price * quantity),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----if quantity of price is 0 throw the error -------
      else {
        return res
          .status(400)
          .json({ type: "Invalid", msg: "Invalid request" });
      }
      let data = await cart.save();
      res
        .status(200)
        .json({ type: "success", msg: "process Successful", data: data });
    }
    //------------ if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created------------
    else {
      const cartData = {
        items: [
          {
            name: productDetails.name,
            productId: productId,
            quantity: quantity,
            total: parseInt(productDetails.price * quantity),
            price: productDetails.price,
          },
        ],
        subTotal: parseInt(productDetails.price * quantity),
      };
      cart = await cartRepo.addItem(cartData);
      // let data = await cart.save();
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ type: "invalid", msg: "Something went wrong", err: err });
  }
};

exports.addQuantityCart = async (req, res) => {
  const { productId, cartId } = req.body;

  try {
    let cart = await car.cart1(cartId);

    let quantity = await cart.items[0].quantity;
    let productDetails = await Product.findById({ _id: productId });

    if (!productDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }

    //if cart Exists ---

    if (cart) {
      //---- check if index exists ----
      const indexFound = cart.items.findIndex(
        (item) => item.productId.id == productId
      );
      //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  -------
      if (indexFound !== -1 && quantity <= 0) {
        cart.items.splice(indexFound, 1);
        if (cart.items.length == 0) {
          cart.subTotal = 0;
        } else {
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        }
      }
      //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
      else if (indexFound !== -1) {
        cart.items[indexFound].quantity = cart.items[indexFound].quantity + 1;
        cart.items[indexFound].total =
          cart.items[indexFound].quantity * productDetails.productPrice;
        cart.items[indexFound].price = productDetails.productPrice;
        cart.items[indexFound].name = productDetails.productName;
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----Check if Quantity is Greater than 0 then add item to items Array ----
      else if (quantity > 0) {
        cart.items.push({
          productId: productId,
          quantity: quantity,
          price: productDetails.price,
          total: parseInt(productDetails.price * quantity),
        });
        cart.subTotal = cart.items
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
      }
      //----if quantity of price is 0 throw the error -------
      else {
        return res
          .status(400)
          .json({ type: "Invalid", msg: "Invalid request" });
      }
      let data = await cart.save();
      res
        .status(200)
        .json({ type: "success", msg: "process Successful", data: data });
    }
    //------------ if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created------------
    else {
      const cartData = {
        items: [
          {
            name: productDetails.name,
            productId: productId,
            quantity: quantity,
            total: parseInt(productDetails.price * quantity),
            price: productDetails.price,
          },
        ],
        subTotal: parseInt(productDetails.price * quantity),
      };

      cart = await cartRepo.addItem(cartData);

      // let data = await cart.save();
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ type: "invalid", msg: "Something went wrong", err: err });
  }
};
