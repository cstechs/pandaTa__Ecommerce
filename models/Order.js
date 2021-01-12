const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  orderId: {
    type: String,
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  postalCode: {
    type: String,
    required: [true, "Postal Code is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Cart is required"],
    ref: "Cart",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    //required: [true, "Created by is required"],
    ref: "User",
  },
  updatedAt: {
    type: Date,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
