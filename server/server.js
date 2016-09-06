var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var port = process.env.PORT || 8999;

app.use(bodyParser.json());
app.use(morgan("dev"));


// Have Express serve up our static files instead of Brackets Live Preview. Yay!
app.use(express.static("../frontEnd"));

// Routes \\
app.use("/api/books", require("./routes/BooksRoutes"));
app.use("/api/studentorder", require("./routes/StudentRoutes"));


mongoose.connect("mongodb://localhost/Makbooks", function () {
	console.log("Database is connected");
});

app.listen(port, function () {
	console.log("Server is running on port " + port);
});