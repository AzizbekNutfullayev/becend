const express = require('express');
const { addBook } = require('../controllers/addBooks');
const { getBooks } = require('../controllers/ollBooks');
const { delate } = require('../controllers/deleate');
const Router = express.Router();


Router.post('/book',addBook)
Router.get('/',getBooks)
Router.delete('/:id',delate)
module.exports = Router