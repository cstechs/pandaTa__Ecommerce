const asyncHandlers = require('../middleware/async');
const Chat = require('../models/Chat');
// @Method: POST
// @Route : api/chat/createChat
// @Desc  : Handling the creation of chat
exports.createChat = asyncHandlers(async (req, res, next) => {
    try { 
       const { message ,sender, createdBy ,sellerId  } = req.body;
       
      
       let chat = await Chat.findOne({ message });
       
       chat = await Chat.create({
        message ,sender, createdBy ,sellerId  
       });
       res.status(200).json({ success: true, data: chat });
   } catch (error) {
       res.status(500).json({message: error.message})
   }
   })
// @Method: GET
// @Route : api/chat/
// @Desc  : Get all chats Message
exports.getChat = async (req, res) => {
    try {
        const chats = await Chat.find();
        res.status(200).json({ success: true, data: chats });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// @Method: DELETE
// @Route : api/category/:id
// @Desc  : Delete category by id
exports.removeChat = async (req, res) => {
    try {
        let id = req.params.id
        const removedChat = await Category.remove({ _id: id });
        res.status(200).json({ success: true, data: removedChat });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}