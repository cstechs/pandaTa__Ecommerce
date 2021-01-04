const asyncHandlers = require("../middleware/async");
const ObjectId = require("mongodb").ObjectID;
const Product = require("../models/Product");

// @Method: POST
// @Route : api/product/createProduct
// @Desc  : Handling the creation of product
exports.createProduct = asyncHandlers(async (req, res, next) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productQuantity,
      productSubCategory,
      createdBy,
    } = req.body;

    let productImage = req.file.filename;

    productImage = productImage.replace("C:\\fakepath\\", "");
    // if (!productName || !productPrice || !productImage || !productDescription || !productQuantity || !productCategory) {
    //  return res.status(400).json({ success: false, message: "Please enter all the fields." });
    //}
    let product = await Product.findOne({ productName });
    if (product) {
      return res
        .status(400)
        .json({ success: false, message: "Product already exists" });
    }
    product = await Product.create({
      productName,
      productPrice,
      productImage,
      productDescription,
      productQuantity,
      productSubCategory,
      createdBy,
    });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @Method: GET
// @Route : api/product/
// @Desc  : Get all products
exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Method: GET
// @Route : api/product/:id
// @Desc  : Get product by id
exports.getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Method: DELETE
// @Route : api/product/:id
// @Desc  : Delete product by id
exports.removeProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const removedProduct = await Product.remove({ _id: id });
    res.status(200).json({ success: true, data: removedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @Method: PATCH
// @Route : api/product/:id
// @Desc  : Handling the updation of product
exports.updateProduct = asyncHandlers(async (req, res, next) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productQuantity,
      productSubCategory,
    } = req.body;

    let productImage = req.file.filename;

    productImage = productImage.replace("C:\\fakepath\\", "");

    // if (!productName || !productPrice || !productImage || !productDescription || !productQuantity || !productCategory) {
    //     return res.status(400).json({ success: false, message: "Please enter all the fields." });
    // }
    let id = req.params.id;
    const updatedProduct = await Product.updateOne(
      { _id: id },
      {
        $set: {
          productName: productName,
          productPrice: productPrice,
          productImage: productImage,
          productDescription: productDescription,
          productQuantity: productQuantity,
          productSubCategory: productSubCategory,
        },
      }
    );
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @Method: GET
// @Route : api/product/:productSubcategoryId
// @Desc  : Get product  by SubCategoryid
exports.getProductBySubCategoryId = async (req, res) => {
  try {
    let id = req.params.id;
    const product = await Product.find({ productSubCategory: id });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductsByCreatedBy = async (req, res) => {
  try {
    let id = req.params.id;
    const product = await Product.find({ createdBy: id });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
