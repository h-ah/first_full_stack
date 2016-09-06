var app = angular.module("RoutingApp" );

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

	this.pushOrder = function (newOrder) {
		//		console.log("neworder:")
		//		console.log(newOrder)
		return $http.post("/api/studentorder/", newOrder).then(function (response) {
			self.OrderList.push(response.data);
			return response;
		});
	};
}]);



//
//app.service("OrderService", ["$http", function($http) {
//    var self = this;
//	console.log("in order book service");
//    this.OrderList = [];
//
//    this.getOrders = function() {
//        return $http.get("/api/studentorder").then(function(response) {
//            self.OrderList = response.data;
//			console.log(response.data);
//            return response.data;
//        });
//    };
//
//    
//
//}]);