const asyncHandlers = require("../middleware/async");
const ObjectId = require("mongodb").ObjectID;
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// @Method: POST
// @Route : api/order/createOrder
// @Desc  : Handling the creation of order
exports.createOrder = asyncHandlers(async (req, res, next) => {
  try {
    const {
      orderNumber,
      firstName,
      lastName,
      companyName,
      email,
      address,
      phone,
      postalCode,
      country,
      city,
      cartId,
      createdBy,
      updatedBy,
    } = req.body;

    order = await Order.create({
      orderNumber,
      firstName,
      lastName,
      companyName,
      email,
      address,
      phone,
      postalCode,
      country,
      city,
      cartId,
      createdBy,
      updatedBy,
    });

    // let cart = await Cart.findById(cartId);
    // console.log("cart", cart);

    // let product = await Product.findById(cart.productId);
    // console.log("product", product);

    // const updatedproduct = await product.updateOne(
    //   { _id: product.productId },
    //   {
    //     $set: {
    //       productQuantity: product.productQuantity - 1,
    //       updatedBy: updatedBy, //get user id from session/cookies
    //     },
    //   }
    // );

    res.status(200).json({
      success: true,
      data: order,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @Method: GET
// @Route : api/order/
// @Desc  : Get all orders
exports.getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Method: GET
// @Route : api/order/:id
// @Desc  : Get order by id
exports.getOrderById = async (req, res) => {
  try {
    let id = req.params.id;
    const order = await Order.findById(id);
    res.status(200).json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Method: PATCH
// @Route : api/order/:id
// @Desc  : Handling the updation of order
exports.updateOrder = asyncHandlers(async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      email,
      address,
      phone,
      postalCode,
      country,
      city,
      updatedBy,
    } = req.body;

    let id = req.params.id;
    const updatedOrder = await Order.updateOne(
      { _id: id },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          email: email,
          address: address,
          phone: phone,
          postalCode: postalCode,
          country: country,
          city: city,
          updatedBy: updatedBy, //get user id from session/cookies
        },
      }
    );
    res.status(200).json({ success: true, data: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
