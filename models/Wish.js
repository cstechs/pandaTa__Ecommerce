const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    
    price: {
        type: Number,
        required: true
    },


}, {
    timestamps: true
})
const WishSchema = new Schema({
    items: [ItemSchema], // will hold the array of items in our cart
   
    createdAt: {
        type: Date,
        default: Date.now
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        //required: [true, "Created by is required"],
        ref: 'User'
      },
      updatedAt: {
        type: Date
      },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
}, {
    timestamps: true
})
module.exports = mongoose.model('wish', WishSchema);