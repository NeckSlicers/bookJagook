const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  id: String,
  username: String,
  report: String,
});

const Report = mongoose.model('Reports', reportSchema);
module.exports = { Report };
