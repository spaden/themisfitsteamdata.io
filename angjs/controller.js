app.controller('Whole', function($scope, $location) {
    $scope.testing = "Cool man working";
    $scope.go = function() {
        $location.path('/tomato');
    }
});