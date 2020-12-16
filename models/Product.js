const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
  },
  productPrice: {
    type: String,
    required: [true, "Product price is required"],
  },
  productImage: {
    type: String,
    //required: [true, "Product image is required"],
  },
  productDescription: {
    type: String,
    required: [true, "Product description is required"],
  },
  productQuantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  productSubCategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Product category is required"],
    ref: "SubCategory",
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
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
