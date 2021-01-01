//Basically we write two methods that will get all cart items in our database and add an item to the cart model
const Cart = require("../models/Cart");

//populate function let you reference document in other collection
exports.cart = async () => {
  const carts = await Cart.find().populate({
    path: "items.productId",
    select: "productImage productName productPrice total",
  });
  return carts;
};

//populate function let you reference document in other collection
exports.cart1 = async (createdBy) => {
  const carts = await Cart.find({ createdBy: createdBy }).populate({
    path: "items.productId",
    select: "productName productPrice total",
  });
  return carts[0];
};

exports.addItem = async (payload) => {
  const newItem = await Cart.create(payload);
  return newItem;
};
