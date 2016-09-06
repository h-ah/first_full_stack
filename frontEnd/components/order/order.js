var app = angular.module("RoutingApp");

toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-center",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
};



app.controller("OrderController", ["$scope", "$route", "$anchorScroll", "BookService", "OrderService", function ($scope, $route, $anchorScroll, BookService, OrderService) {

	$scope.isDisabled = false;

	$scope.BookListData = BookService.bookList;

	//		
	//	$scope.school;
	//	$scope.clas;
	//	$scope.languagee;

	$scope.addOrder = function (newOrder) {
		newOrder.books = $scope.selectedBooks
		console.log(newOrder);
		OrderService.pushOrder(newOrder);
		$scope.isDisabled = true;
		toastr.info("تم ارسال طالبكم بنجاح");
		$route.reload();
		$anchorScroll()

	};


	$scope.getAllBooks = function (order) {
		BookService.getBooks(order).then(function (resp) {
			console.log(resp.data)
			$scope.BookListData = resp.data;
		});
	};


	$scope.selectedBooks = [];

	$scope.addOrderBook = function (bookName) {
		var idx = $scope.selectedBooks.indexOf(bookName);
		// is currently selected
		if (idx > -1) {
			$scope.selectedBooks.splice(idx, 1);
		}
		// is newly selected
		else {
			$scope.selectedBooks.push(bookName);
		}
	};



			}]);