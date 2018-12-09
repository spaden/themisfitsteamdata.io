app.controller('TmCont', function($scope, $routeParams) {
    $scope.hey = $routeParams.firstname;

    if ($routeParams.firstname == 'spaden') {
        this.who = "Creator | Full Stack Developer | Project Manager";
    } else if ($routeParams.firstname == 'asbn') {
        this.who = "Tester | Team Manager | Hiring Manager";
    } else {
        this.who = "Team Manager";
    }

    $scope.test = this.who;

    this.check = function(name) {
        var obj;
        if (name == 'dlg') {
            obj = {
                name: 'Dachupally Guru Lekhan Sai',
                teamsize: 18,
                rating: 4.5
            }
        } else if (name == 'rahul') {
            obj = {
                name: 'BethiReddy Rahul Reddy',
                teamsize: 16,
                rating: 3.9
            }
        } else if (name == 'nimesh') {
            obj = {
                name: 'Chanaburlu Nimesh Reddy',
                teamsize: 10,
                rating: 3
            }
        } else if (name == 'sumanth') {
            obj = {
                name: 'Sumanth Raja Naidu',
                teamsize: 12,
                rating: 3.2
            }
        } else if (name == 'asbn') {
            obj = {
                name: 'ASBN Sudhir',
                teamsize: 20,
                rating: 4.8
            }
        } else {
            obj = {
                name: 'Dheshoju Kalyan Kumar',
                teamsize: 5,
                rating: 2
            }
        }
        return obj;
    };

    $scope.test2 = this.check($routeParams.firstname);
});