app.controller('Whole', function($scope, $location) {
    $scope.testing = "Cool man working";
    $scope.hey = function(event) {
        console.log(event.target.id);
        console.log('working');
    }
});