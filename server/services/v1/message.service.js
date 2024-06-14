const Message = require('../../models/v1/message.model');

const getMessagesBetweenUsers = async (user1, user2) => {
  return await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 },
    ],
  }).sort({ timestamp: 1 });
};

const createMessage = async (messageData) => {
  const message = new Message(messageData);
  return await message.save();
};

const updateMessage = async (id, messageData) => {
  return await Message.findByIdAndUpdate(id, messageData, { new: true });
};

const deleteMessage = async (id) => {
  return await Message.findByIdAndDelete(id);
};

module.exports = {
  getMessagesBetweenUsers,
  createMessage,
  updateMessage,
  deleteMessage,
};
