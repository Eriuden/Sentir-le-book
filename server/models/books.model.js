const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  picture: {
    type: String,
  },
  bookName: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    trim: true,
    maxlength: 500,
  },

  author: {
    type: String,
    required: true,
  },

  editor: {
    type: String,
    required: true,
  },
  yearOfPublication: {
    type: Number,
    required: true
  },
  bookLikedBy: {
    type: [String],
    required: true
  }
});

const BooksModel = mongoose.model("Books", BookSchema);
module.exports = BooksModel;