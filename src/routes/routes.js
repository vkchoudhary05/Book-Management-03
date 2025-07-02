const express = require('express');
const router = express.Router();
const { registerUser } = require("../controllers/userController")
const { userLogin } = require("../controllers/loginController")
const { userAuthentication } = require("../middleware/authentication")
const { userAuthor } = require("../middleware/authorization")
const { createBook, getBooks, updateBook, deleteBooksBYId, getBooksReviews } = require("../controllers/bookController")
const {createReview, updateReview, deleteReview} = require("../controllers/reviewController")

//User API Route Handlers
router.post("/register", registerUser)
router.post("/login", userLogin)

//Book API Route Handlers. Make sure that only the owner of the books is able to create, edit or delete the book.
router.post("/books",userAuthentication,userAuthor, createBook)
router.get("/books",userAuthentication, getBooks)
router.get("/books/:bookId",userAuthentication, getBooksReviews)
router.put("/books/:bookId", userAuthentication, userAuthor, updateBook)
router.delete("/books/:bookId", userAuthentication, userAuthor, deleteBooksBYId)

//Review API Route Handlers
// router.post("/books/:bookId/review", createReview)
// router.put("/books/:bookId/review/:reviewId", updateReview)
// router.delete("/books/:bookId/review/:reviewId", deleteReview)


module.exports = router