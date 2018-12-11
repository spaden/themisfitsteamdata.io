app.controller('IntnCont', function($scope, $location) {
    $scope.list = [{
            name: 'Dasari Sumanth',
            teamNumber: 3,
            rating: 4.5,
            review: 'Motivated with goodwill'
        },
        {
            name: 'Gara Sai Kumar',
            teamNumber: 2,
            rating: 4.2,
            review: 'Ethical person'
        },
        {
            name: 'Sunil Syndhey',
            teamNumber: 3,
            rating: 4.5,
            review: 'Gets work done'
        },
        {
            name: 'Manoj Kumar',
            teamNumber: 1,
            rating: 3.9,
            review: 'Believes in what he does'
        },
        {
            name: 'Ravi Chandra',
            teamNumber: 1,
            rating: 4.3,
            review: 'Diligent Team player'
        },
        {
            name: 'Preeti Das',
            teamNumber: 2,
            rating: 4.9,
            review: 'Motivated and dexterous'
        },
        {
            name: 'Akash Tah',
            teamNumber: 4,
            rating: 4.3,
            review: 'Glib communicator'
        },
        {
            name: 'Narendra Sai',
            teamNumber: 4,
            rating: 3.7,
            review: 'Laconic but intelligent'
        }

    ];
    $scope.test = function(event) {
        $location.path('/indv/' + event.target.id);
    }
});