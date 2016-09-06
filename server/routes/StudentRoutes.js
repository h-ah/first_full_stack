var express = require("express");
var studentRoutes = express.Router();
var STUDENT = require("../models/student");

studentRoutes.route("/")
    .get(function (req, res) {
        STUDENT.find(function (err, student) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(student);
            }
        });
    })
    .post(function(req, res) {
        var newStudent = new STUDENT(req.body);
	console.log(newStudent)
        newStudent.save(function(err, newStudentObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newStudentObj);
            }
        });
    });

//studentRoutes.route("/")
//    .get(function(req, res) {
//		var query = {};
//		if (req.query.school) {
//			query.school = req.query.school;
//			query.class = req.query.class;
//		}
//	STUDENT.find(query, function(err, studentObj) {
//			if (err) {
//				res.status(500).send(err);
//			} else {
//				res.send(studentObj);
//			}
//		});
//	});
//


module.exports = studentRoutes;
