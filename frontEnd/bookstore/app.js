var app = angular.module('myApp', ['ui.bootstrap']);

app.filter('startFrom', function () {
	return function (input, start) {
		if (input) {
			start = +start;
			return input.slice(start);
		}
		return [];
	};
});


app.controller('PageCtrl', ['$scope', 'filterFilter', function ($scope, filterFiltere) {
	$scope.items = [{
			"_id": "57c8690310eec8548c977afc",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثاني أساسي",
			"fullName": "student name",
			"phone": "4444",
			"email": "eee",
			"address": "adddddd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.618Z",
			"books": [
      "دفاتر ابو بكر / الثاني",
      "Go math & wb Gr 2",
      "الموسيقى الحلقة الاولى الجزء الاول",
      "Les Loustics 1 livre",
      "التاريخ الوطني المصور الجزء الاول/صف 2",
      "جغرافيا السلسلة العلمية السنة الثانية"
    ]
  },
		{
			"_id": "57c86c6d10eec8548c977afd",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثاني أساسي",
			"fullName": "dhdfghfd",
			"phone": "465464",
			"email": "cxbvdfgw",
			"address": "chgfhg",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.618Z",
			"books": [
      "التاريخ الوطني المصور الجزء الاول/صف 2",
      "جغرافيا السلسلة العلمية السنة الثانية",
      "المبادئ الاسلامية ثاني ابتدائي",
      "لغتي فرحي في القراءة الثالث",
      "لغتي فرحي في القواعد الثالث قسم ثاني",
      "التربية المدنية والتنشئة الوطنية السنةالثالثة",
      "Science Fusion GR 2 book",
      "Go math & wb Gr 2"
    ]
  },
		{
			"_id": "57c86f6110eec8548c977afe",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثاني أساسي",
			"fullName": "asdasd",
			"phone": "asdas",
			"email": "asdas",
			"address": "asdsa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.618Z",
			"books": [
      "تطبيقات لغتي فرحي الثاني قسم ثاني",
      "Journey Prac BK Vol 1 Gr 2",
      "الموسيقى الحلقة الاولى الجزء الاول",
      "التاريخ الوطني المصور الجزء الاول/صف 2"
    ]
  },
		{
			"_id": "57c966c83a37ff2c1af44a24",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "يسبيس",
			"phone": "يسبسيب",
			"email": "سيبيسب",
			"address": "شسبشسيب",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.619Z",
			"books": [
      "دفاتر ابو بكر / الاول",
      "تطبيقات لغتي فرحي الاول قسم اول",
      "Journey Vol 2 Gr 1"
    ]
  },
		{
			"_id": "57c968e23a37ff2c1af44a25",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثالث أساسي",
			"fullName": "asdasd",
			"phone": "asdsad",
			"email": "asdsa",
			"address": "dasd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.619Z",
			"books": [
      "دفاتر ابو بكر / الثالث"
    ]
  },
		{
			"_id": "57c96c8f1d4fb60032ffeb36",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fss",
			"phone": "dsfdsf",
			"email": "sdfsd",
			"address": "sdfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.619Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c96e7f1d4fb60032ffeb37",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dsd",
			"phone": "sadas",
			"email": "asda",
			"address": "sadsad",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.619Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c970f41d4fb60032ffeb38",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "er",
			"phone": "fds",
			"email": "sdf",
			"address": "sdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.619Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9731a1d4fb60032ffeb39",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "wer",
			"phone": "wer",
			"email": "wer",
			"address": "wer",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97908b5221a58468adf3a",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "kmkmk",
			"phone": "j",
			"email": "65655",
			"address": "ll",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9792eb5221a58468adf3b",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "kmkmk",
			"phone": "j",
			"email": "65655",
			"address": "ll",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97a07b5221a58468adf3c",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dsa",
			"phone": "dsaa",
			"email": "adsa",
			"address": "adsas",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97a4ab5221a58468adf3d",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gfsg",
			"phone": "fgg",
			"email": "gdfdg",
			"address": "gfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97a52b5221a58468adf3e",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gfsg",
			"phone": "fgg",
			"email": "gdfdg",
			"address": "gfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97a60b5221a58468adf3f",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gfsg",
			"phone": "fgg",
			"email": "gdfdg",
			"address": "gfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.620Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97ab3b5221a58468adf40",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gfsg",
			"phone": "fgg",
			"email": "gdfdg",
			"address": "gfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c97ae0b5221a58468adf41",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fgdf",
			"phone": "dfgd",
			"email": "dfgfd",
			"address": "dfgdgd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم اول",
      "Journey Prac BK Vol 1 Gr 1"
    ]
  },
		{
			"_id": "57c97ae7b5221a58468adf42",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fgdf",
			"phone": "dfgd",
			"email": "dfgfd",
			"address": "dfgdgd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم اول",
      "Journey Prac BK Vol 1 Gr 1"
    ]
  },
		{
			"_id": "57c97fbab5221a58468adf43",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fdsd",
			"phone": "sdfds",
			"email": "dfdsf",
			"address": "sdfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي",
      "تطبيقات لغتي فرحي الاول قسم اول"
    ]
  },
		{
			"_id": "57c97fc4b5221a58468adf44",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fdsd",
			"phone": "sdfds",
			"email": "dfdsf",
			"address": "sdfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي",
      "تطبيقات لغتي فرحي الاول قسم اول"
    ]
  },
		{
			"_id": "57c97fd6b5221a58468adf45",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fdsd",
			"phone": "sdfds",
			"email": "dfdsf",
			"address": "sdfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي",
      "تطبيقات لغتي فرحي الاول قسم اول"
    ]
  },
		{
			"_id": "57c97fddb5221a58468adf46",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fdsd",
			"phone": "sdfds",
			"email": "dfdsf",
			"address": "sdfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي",
      "تطبيقات لغتي فرحي الاول قسم اول"
    ]
  },
		{
			"_id": "57c9804db5221a58468adf47",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "asdsadasd",
			"phone": "das",
			"email": "asddsaasd",
			"address": "as",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "دفاتر ابو بكر / الاول",
      "Journey Prac BK Vol 2 Gr 1"
    ]
  },
		{
			"_id": "57c9805cb5221a58468adf48",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثاني أساسي",
			"fullName": "asdsadasd",
			"phone": "das",
			"email": "asddsaasd",
			"address": "as",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "دفاتر ابو بكر / الاول",
      "Journey Prac BK Vol 2 Gr 1"
    ]
  },
		{
			"_id": "57c980a8b5221a58468adf49",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "cvxv",
			"phone": "xcvcx",
			"email": "vxcvcx",
			"address": "xcvxc",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.621Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98110b5221a58468adf4c",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98126b5221a58468adf4d",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c9812fb5221a58468adf4e",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c9813ab5221a58468adf4f",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c9814bb5221a58468adf50",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98152b5221a58468adf51",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98186b5221a58468adf52",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "xvv",
			"phone": "xcvx",
			"email": "xcvxvc",
			"address": "xvccxvxcv",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.622Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c981f5b5221a58468adf53",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "sdfds",
			"phone": "dsfds",
			"email": "sdfdfs",
			"address": "fdssdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.623Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98200b5221a58468adf54",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "sdfds",
			"phone": "dsfds",
			"email": "sdfdfs",
			"address": "fdssdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.624Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c98299b5221a58468adf55",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "sdfds",
			"phone": "dsfds",
			"email": "sdfdfs",
			"address": "fdssdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.624Z",
			"books": [
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c982f2b5221a58468adf56",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.624Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98341b5221a58468adf57",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.624Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c983e2b5221a58468adf58",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c983f6b5221a58468adf59",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c983fdb5221a58468adf5a",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98410b5221a58468adf5b",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98412b5221a58468adf5c",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98417b5221a58468adf5d",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98419b5221a58468adf5e",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9841bb5221a58468adf5f",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9841cb5221a58468adf60",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9841db5221a58468adf61",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9841eb5221a58468adf62",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c98423b5221a58468adf63",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dadf",
			"phone": "dfa",
			"email": "asfsad",
			"address": "asfsfa",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.625Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9980fb5221a58468adf64",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gf",
			"phone": "sd",
			"email": "sfd",
			"address": "sfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c99813b5221a58468adf65",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "gf",
			"phone": "sd",
			"email": "sfd",
			"address": "sfd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c998b6b5221a58468adf66",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dds",
			"phone": "df",
			"email": "dd",
			"address": "dfdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c998b9b5221a58468adf67",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "dds",
			"phone": "df",
			"email": "dd",
			"address": "dfdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c999aab5221a58468adf68",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "e",
			"phone": "sd",
			"email": "sdf",
			"address": "sdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم ثاني"
    ]
  },
		{
			"_id": "57c999acb5221a58468adf69",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "e",
			"phone": "sd",
			"email": "sdf",
			"address": "sdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم ثاني"
    ]
  },
		{
			"_id": "57c999acb5221a58468adf6a",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "e",
			"phone": "sd",
			"email": "sdf",
			"address": "sdf",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم ثاني"
    ]
  },
		{
			"_id": "57c9a3e2b5221a58468adf6b",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "asd",
			"phone": "asd",
			"email": "as",
			"address": "as",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم ثاني",
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9a4b8b5221a58468adf6c",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "ds",
			"phone": "sa",
			"email": "sa",
			"address": "as",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9a594b5221a58468adf6d",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "طالب",
			"phone": "012345678",
			"email": "بريد",
			"address": "عنوان",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.626Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9a6e6b5221a58468adf6e",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "student2",
			"phone": "0123456789",
			"email": "email",
			"address": "address",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.627Z",
			"books": [
      "دفاتر ابو بكر / الاول",
      "المبادئ الاسلامية اول ابتدائي"
    ]
  },
		{
			"_id": "57c9a7bab5221a58468adf6f",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "fesfd",
			"phone": "dfd",
			"email": "sdfds",
			"address": "dsfds",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.627Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9a8a0b5221a58468adf70",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "df",
			"phone": "22",
			"email": "sdf",
			"address": "f",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:56:53.627Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9aa1a68ddc80891c6e6c3",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الخامس أساسي",
			"fullName": "yyy",
			"phone": "yyy",
			"email": "yy",
			"address": "yty",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T16:34:34.422Z",
			"books": [
      "دفاتر ابو بكر / الخامس"
    ]
  },
		{
			"_id": "57c9ae9268ddc80891c6e6c4",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الرابع أساسي",
			"fullName": "f",
			"phone": "f",
			"email": "f",
			"address": "f",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T16:53:38.948Z",
			"books": [
      "تطبيقات لغتي فرحي الرابع قسم اول"
    ]
  },
		{
			"_id": "57c9aef468ddc80891c6e6c5",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "ff",
			"phone": "ff",
			"email": "f",
			"address": "f",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T16:55:16.483Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم اول"
    ]
  },
		{
			"_id": "57c9b00768ddc80891c6e6c6",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "t",
			"phone": "t",
			"email": "t",
			"address": "t",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T16:59:51.658Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9b03668ddc80891c6e6c7",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "r",
			"phone": "r",
			"email": "r",
			"address": "r",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T17:00:38.137Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9b05468ddc80891c6e6c8",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "r",
			"phone": "r",
			"email": "r",
			"address": "e",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T17:01:08.136Z",
			"books": [
      "دفاتر ابو بكر / الاول"
    ]
  },
		{
			"_id": "57c9b07268ddc80891c6e6c9",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الأول أساسي",
			"fullName": "e",
			"phone": "e",
			"email": "e",
			"address": "e",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T17:01:38.120Z",
			"books": [
      "تطبيقات لغتي فرحي الاول قسم ثاني"
    ]
  },
		{
			"_id": "57c9b14168ddc80891c6e6ca",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الثالث أساسي",
			"fullName": "xvxx",
			"phone": "zcdd",
			"email": "fdfds",
			"address": "sfs",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T17:05:05.320Z",
			"books": [
      "دفاتر ابو بكر / الثالث",
      "المبادئ الاسلامية ثالث ابتدائي",
      "تطبيقات مبادئ ثالث ابتدائي"
    ]
  },
		{
			"_id": "57c9b4e768ddc80891c6e6cc",
			"school": "AbiBakr",
			"languagee": "انكليزي",
			"class": "الرابع أساسي",
			"fullName": "yuyuyu",
			"phone": "444",
			"email": "rrr",
			"address": "rrr",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-02T17:20:39.893Z",
			"books": [
      "دفاتر ابو بكر / الرابع",
      "مفكرة مدرسية حلقة ثانية",
      "لغتي فرحي في القراة الرابع",
      "تطبيقات لغتي فرحي الرابع قسم ثاني",
      "Journey Pract Gr 4"
    ]
  },
		{
			"_id": "57cd7dcb48030180627c4701",
			"fullName": "std fname",
			"address": "std address",
			"phone": "01-2224444",
			"email": "emails",
			"class": "std class",
			"school": "std school",
			"languagee": "english",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-05T14:14:35.705Z",
			"books": [
      "book1",
      "book  ss2",
      "book3"
    ]
  },
		{
			"_id": "57cea3e228602d9016c13be5",
			"school": "khaled",
			"languagee": "فرنسي",
			"class": "الثاني أساسي",
			"fullName": "dfsdf",
			"phone": "dsfs",
			"email": "sdfsf",
			"address": "sdfsd",
			"__v": 0,
			"completed": false,
			"orderDate": "2016-09-06T11:09:22.904Z",
			"books": [
      "المبادئ الاسلامية ثاني ابتدائي",
      "لغتي فرحي في القراءة الثاني",
      "Max et jules  EB2 cahier 1"
    ]
  }];

	// create empty search model (object) to trigger $watch on update
	$scope.search = {};

	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};

	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 8; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);