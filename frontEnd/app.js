var app = angular.module("RoutingApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl: "components/home/home.html",
			controller: "HomeController"
		})
		.when("/omarsec", {
			templateUrl: "components/omarsec/omarsec.html",
			controller: "OmarSecController"
		})
		.when("/omarprim", {
			templateUrl: "components/omarprim/omarprim.html",
			controller: "omarprimController"
		})
		.when("/alisec", {
			templateUrl: "components/alisec/alisec.html",
			controller: "AliSecController"
		})
		.when("/aliprim", {
			templateUrl: "components/aliprim/aliprim.html",
			controller: "aliprimController"
		})
		.when("/abibaker", {
			templateUrl: "components/abibaker/abibaker.html",
			controller: "abibakerController"
		})
		.when("/aicha", {
			templateUrl: "components/aicha/aicha.html",
			controller: "aichaController"
		})
		.when("/khadija", {
			templateUrl: "components/khadija/khadija.html",
			controller: "khadijaController"
		})
		.when("/khalid", {
			templateUrl: "components/khalid/khalid.html",
			controller: "khalidController"
		})
		.when("/khalil", {
			templateUrl: "components/khalil/khalil.html",
			controller: "khalilController"
		})
		.when("/order", {
			templateUrl: "components/order/order.html",
			controller: "OrderController"
		})
		.when("/orderList", {
			templateUrl: "components/orderList/orderList.html",
			controller: "OrderListController"
		})

	.otherwise({
		redirectTo: "/"
	});
}]);