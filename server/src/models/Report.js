const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  id: String,
  userId: Number,
  report: String,
});

const Report = mongoose.model('Reports', reportSchema);
module.exports = { Report };
