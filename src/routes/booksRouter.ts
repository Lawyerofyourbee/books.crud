const booksRouter = require('express').Router()
const booksController = require('../controllers/booksController')

booksRouter.post("/books", booksController.addBook)
booksRouter.get('/books', booksController.getBooks)
booksRouter.get('/books/:id', booksController.getBookById)
booksRouter.put("/books/:id", booksController.refreshBookInfo)
booksRouter.delete("/books/:id", booksController.deleteBook)

export default booksRouter
