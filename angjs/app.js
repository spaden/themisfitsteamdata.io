var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'temp/mn.htm',
            controller: "Whole"
        })
        .when("/banana/:firstname", {
            templateUrl: "temp/temv.htm",
            controller: "Yogetti"
        })
        .when("/tomato", {
            template: "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
        });
});