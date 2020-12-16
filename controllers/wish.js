//const cartRepository = require('./repository.js')
const Product = require("../models/Product");
const car = require("../middleware/db");
const Wish = require("../models/Wish");

exports.addItemToWish = async (req, res) => {
  const { productId, createdBy } = req.body;

  try {
    let cart = await cart.wish1(createdBy);

    // let id = req.params.id;
    let productDetails = await Product.findById({ _id: productId });
    if (!productDetails) {
      return res.status(500).json({
        type: "Not Found",
        msg: "Invalid request",
      });
    }

    //--If cart exists ----

    //------------ This creates a new cart and then adds the item to the cart that has been created------------
    else {
      const cartData = {
        items: [
          {
            productId: productId,
            price: productDetails.productPrice,
          },
        ],
        createdBy: createdBy,
      };
      cart = await cart.addwishItem(cartData);
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
exports.getWish = async (req, res) => {
  try {
    let cart = await cart.wish();
    if (!cart) {
      return res.status(400).json({
        type: "Invalid",
        msg: "Wishlist Not Found not found",
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
      err: err.message,
    });
  }
};

exports.getwishById = async (req, res) => {
  try {
    let id = req.params.id;
    const cart = await Wish.findById(id);
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//This remove item from the items from the wishlist
exports.emptyItem = async (req, res) => {
  try {
    let cart = await cart.cart();
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res.status(200).json({
      type: "Success",
      mgs: "Cart has been emptied",
      data: data,
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

exports.removeWishlist = async (req, res) => {
  try {
    let id = req.params.id;
    const removedwish = await Wish.remove({ _id: id });
    res.status(200).json({ success: true, data: removedwish });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
