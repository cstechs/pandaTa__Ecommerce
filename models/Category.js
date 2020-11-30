const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  categoryName: {
      type: String,
      required: 'Category Name is required'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      // required: [true, "Created by is required"],
      ref: 'User'
    },
    updatedAt: {
      type: Date
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
}, {timestamps: true});
const Cateogry = mongoose.model("Category", categorySchema );
module.exports  = Cateogry;