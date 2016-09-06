var express = require("express");
var booksRoutes = express.Router();
var BOOK = require("../models/books");
//
booksRoutes.route("/")
	//    .get(function (req, res) {
	//        BOOK.find(function (err, books) {
	//            if (err) {
	//                res.status(500).send(err);
	//            } else {
	//                res.send(books);
	//            }
	//        });
	//    })
	.get(function (req, res) {
		var query = {};
		if (req.query.school) {
			query.school = req.query.school;
			query.class =  req.query.class;
			console.log(query.school + " " +query.class);
					}
		BOOK.find(query, function (err, bookObj) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(bookObj);
			}
		});
	})
	.post(function (req, res) {
		var newBook = new BOOK(req.body);
		newBook.save(function (err, newBookObj) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(newBookObj);
			}
		});
	});
//
//booksRoutes.route("/:id")
//    .get(function(req, res) {
//        BOOK.findById(req.params.id, function(err, bookObj) {
//            if (err) {
//                res.status(500).send(err);
//            } else {
//                res.send(bookObj);
//            }
//        });
//    })
//    .put(function(req, res) {
//       BOOK.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedBook) {
//            if (err) {
//                res.status(500).send(err);
//            } else {
//                res.send(updatedBook);
//            }
//        })
//    })
//    .delete(function(req, res) {
//        BOOK.findByIdAndRemove(req.params.id, function(err, deletedBook) {
//            if (err) {
//                res.status(500).send(err);
//            } else {
//                var responseObj = {
//                    success: true,
//                    message: "Successfully deleted a Book",
//                    todo: deletedBook
//                };
//                res.send(responseObj);
//            }
//        });
//    });
//
//
//booksRoutes.route("/")
//	.get(function (req, res) {
//		var query = {};
//		if (req.query.school) {
//			query.school = req.query.school;
//		}
//		BOOK.find(query, function (err, bookObj) {
//			if (err) {
//				res.status(500).send(err);
//			} else {
//				res.send(bookObj);
//			}
//		});
//	});




module.exports = booksRoutes;