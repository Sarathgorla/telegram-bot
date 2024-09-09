const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  channelId: {
    type: Number,
    required: true,
    unique: true
  },
  userId: {
    type: Number,
    required: true
  }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;