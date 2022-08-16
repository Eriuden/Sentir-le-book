const router = require("express").Router();
const booksController = require("../controllers/books.controller");
const multer = require("multer");
const upload = multer();

router.get("/", booksController.readBook);
router.post("/", upload.single("file"), booksController.createBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

router.patch("/like-book/:id", booksController.likeBook);
router.patch("/unlike-book/:id", booksController.unlikeBook);

module.exports = router;