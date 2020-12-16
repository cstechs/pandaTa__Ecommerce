const asyncHandlers = require('../middleware/async');
const Category = require('../models/Category');
// @Method: POST
// @Route : api/category/createCategory
// @Desc  : Handling the creation of category
exports.createCategory = asyncHandlers(async (req, res, next) => {
 try{ 
  const { categoryName } = req.body;
  if (!categoryName) {
    return res.status(400).json({ success: false, message: "Please enter Category name." });
  }
  let category = await Category.findOne({ categoryName });
  if (category) {
    return res.status(400).json({ success: false, message: 'Category already exists' });
  }
  category = await Category.create({ categoryName });
  res.status(200).json({ success: true, data: category });
} catch (error) {
    res.status(500).json({message: error.message})
}
})
// @Method: GET
// @Route : api/category/
// @Desc  : Get all categories
exports.getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// @Method: GET
// @Route : api/category/:id
// @Desc  : Get category by id
exports.getCategoryById = async (req, res) => {
    try {
        let id = req.params.id
        const category = await Category.findById(id);
        res.status(200).json({ success: true, data: category });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// @Method: DELETE
// @Route : api/category/:id
// @Desc  : Delete category by id
exports.removeCategory = async (req, res) => {
    try {
        let id = req.params.id
        const removedCategory = await Category.remove({ _id: id });
        res.status(200).json({ success: true, data: removedCategory });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// @Method: PATCH
// @Route : api/category/:id 
// @Desc  : Handling the updation of category
exports.updateCategory = asyncHandlers(async (req, res, next) => {
    try{ 
     const { categoryName } = req.body;
     if (!categoryName) {
       return res.status(400).json({ success: false, message: "Please enter Category name." });
     }
     let id = req.params.id
     const updatedCategory = await Category.updateOne(
        { _id: id }, 
        { $set: { categoryName: categoryName} }
     );
     res.status(200).json({ success: true, data: updatedCategory });
   } catch (error) {
       res.status(500).json({message: error.message})
   }
})


// @Method: GET
// @Route : api/category/:productSubcategoryId
// @Desc  : Get category by SubCategoryid
exports.getCategoryBySubCategoryId = async (req, res) => {
    try {
        let id = req.params.id
        const category = await Category.find({SubCategory: id});
        res.status(200).json({ success: true, data: category });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}