const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  employee: String,
  action: String,
  time: String,
  date: String
});

module.exports = mongoose.model('Record', recordSchema);
