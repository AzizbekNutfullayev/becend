const express = require('express');
const { addBook } = require('../controllers/addBooks');
const { getBooks } = require('../controllers/ollBooks');
const Router = express.Router();


Router.post('/book',addBook)
Router.get('/',getBooks)

module.exports = Router