const mongoose = require('mongoose');

const myBookSchema = new mongoose.Schema({
  id: string, // isbn13
  userId: number,
  bookImg: string, // cover
  link: string, // link
  title: string, // title
  author: string, // author
  description: string, // description
  publisher: string, // publisher
  priceStandard: number, // priceStandard
  priceSales: number, // priceSales
  star: number,
  commnet: string,
  review: string,
});

const Mybook = mongoose.model('Mybooks', myBookSchema);

module.exports = { Mybook };
