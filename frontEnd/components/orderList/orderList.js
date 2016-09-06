var app = angular.module("RoutingApp");

app.controller("OrderListController", ["$scope", "OrderService", function ($scope, OrderService) {
	var list = [];

	$scope.OrderService = OrderService;
	//	console.log($scope.OrderService);
	//	OrderService.getOrders();
	//	console.log($scope.OrderService.OrderList);

	OrderService.getOrders().then(function (res) {
		list = res.data;
		console.log(list);

	});

	//	$scope.completeOrder = function (order, index) {
	//		OrderService.updateOrder(order, index);
	//	}


}]);