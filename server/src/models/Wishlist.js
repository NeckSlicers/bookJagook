const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  id: String,
  username: String,
  bookImg: String,
  link: String,
  title: String,
  author: String,
  description: String,
  publisher: String,
  priceStandard: Number,
  priceSales: Number,
});

const Wishlist = mongoose.model('WishLists', wishlistSchema);

module.exports = { Wishlist };
