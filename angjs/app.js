var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'temp/mn.htm',
            controller: "Whole"
        })
        .when("/team/:firstname", {
            templateUrl: "temp/temv.htm",
            controller: "TmCont"
        })
        .when("/intn/:name", {
            templateUrl: "temp/indv.htm",
            controller: "IntnCont"
        });
});