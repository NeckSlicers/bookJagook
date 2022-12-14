const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookId: String,
  nickName: String,
  comment: String,
  star: Number,
});

const Review = mongoose.model('Reviews', reviewSchema);

module.exports = { Review };
