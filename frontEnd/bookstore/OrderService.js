var app = angular.module('myApp', ['ui.bootstrap']);
app.service("OrderService", ["$http", function ($http) {
	var self = this;
	console.log("in order service");
	this.OrderList = [];

	this.getOrders = function () {
		return $http.get("/api/studentorder").then(function (response) {
			self.OrderList = response.data;
			//			console.log(response.data);
			return response;
		});
	};


}]);