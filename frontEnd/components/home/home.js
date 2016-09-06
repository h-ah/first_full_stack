var app = angular.module("RoutingApp");

app.controller("HomeController", ["$scope", function ($scope) {



	var months = ["كانون الاول", "شباط", "آذار", "نيسان", "آيار", "حزيران",
              "تموز", "اب", "أيلول", "تشرين الاول", "تشرين الثاني", "كانون الثاني"];

	var days = ["اﻷحد", "اﻷثنين", "الثلاثاء", "اﻷربعاء", "الخميس", "الجمعة", "السبت"];

	var date = new Date();

	$scope.homedt = days[date.getDay()] + "، " + date.getDate() + " " + months[date.getMonth()] + "، " + date.getFullYear();


}]);