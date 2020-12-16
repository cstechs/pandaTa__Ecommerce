const mongoose = require("mongoose");
const chatSchema = mongoose.Schema({
 
    message: {
        type: String
      },
  //send by  1 and 0 for testing   
      sender: {
        type: String
      },
      //UserID
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        //required: [true, "Created by is required"],
        ref: 'User'
      },
    sellerId:{
      type:String
    },
    updatedAt: {
        type: Date
      },







}, {timestamps: true});
const Chat = mongoose.model("Chat", chatSchema );
module.exports  = Chat;
