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
        .when("/intn", {
            templateUrl: "temp/intn.htm",
            controller: "IntnCont"
        }).when("/indv", {
            templateUrl: "temp/indv.htm",
            controller: "IndvCont"
        });
});