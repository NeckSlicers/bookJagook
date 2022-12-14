const mongoose = require('mongoose');

const myBookSchema = new mongoose.Schema({
  id: Number, // isbn13
  username: String,
  bookImg: String, // cover
  link: String, // link
  title: String, // title
  author: String, // author
  description: String, // description
  publisher: String, // publisher
  priceStandard: Number, // priceStandard
  priceSales: Number, // priceSales
  star: Number,
  commnet: String,
  review: String,
});

const Mybook = mongoose.model('Mybooks', myBookSchema);

module.exports = { Mybook };
