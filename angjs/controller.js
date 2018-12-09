app.controller('Whole', function($scope, $location) {
    $scope.testing = "Cool man working";
    $scope.hey = function(event) {
        $location.path('/team/' + event.target.id);
    }
});