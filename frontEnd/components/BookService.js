var app = angular.module("RoutingApp");

app.service("BookService", ["$http", function ($http) {
	var self = this;
	console.log("in book service");
	this.BookList = [];

	this.getBooks = function (order) {
		return $http.get("/api/books/?school=" + order.school + "&class=" + order.class + " " + order.languagee).then(function (response) {
			self.BookList = response.data;
			return response;
		});
	};



}]);