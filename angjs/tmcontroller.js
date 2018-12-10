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
                rating: 4.5,
                points: [
                    'Highly motivated to get the work done',
                    'Implements the given plan accordingly and with finesse',
                    'Gives a lucid explanation for his team members about the given task',
                    'Coerces his team members to get the work done on time',
                    'Mostly gives people a second chance'
                ],
                review: 'Motivated Team Player'
            }
        } else if (name == 'rahul') {
            obj = {
                name: 'BethiReddy Rahul Reddy',
                teamsize: 16,
                rating: 3.9,
                points: [
                    'Gets work done on time',
                    'Ability to work under pressure',
                    'Energetic',
                    'Has an ability to see an issue with equanimity',
                    'Motivated and diligent team player'
                ],
                review: 'Impressive management'
            }
        } else if (name == 'nimesh') {
            obj = {
                name: 'Chanaburlu Nimesh Reddy',
                teamsize: 10,
                rating: 4.2,
                points: [
                    'Risk taker and diligent team manager',
                    'Worked with him for 4 projects and has taken a lot of arduous tasks to keep the projects afloat',
                    'Proven ability to work under pressure',
                    'Quick learner and highly motivated in case he sets his mind to',
                    'Impresively communicated the story behind our project idea to inters'
                ],
                review: 'Never disappoints'
            }
        } else if (name == 'sumanth') {
            obj = {
                name: 'Sumanth Raja Naidu',
                teamsize: 12,
                rating: 4.3,
                points: [
                    'Risk taker and diligent team player',
                    'Worked with him for 4 projects and even agreed to work in the team understanding the pitfalls',
                    'Quick learner and is an indefatigable person',
                    'Diligent and energetic',
                    'Glib talker and even a garrulous one'
                ],
                review: 'Really cool'
            }
        } else if (name == 'asbn') {
            obj = {
                name: 'ASBN Sudhir',
                teamsize: 20,
                rating: 4.8,
                points: [
                    'Invested his valuable time and skills to work in this project as team',
                    'Hired project interns with dexterity and even convinced many people to get the work on track',
                    'Managed project funds appropriately and bought the right domain on time',
                    'Tested the whole web site for bugs on a regular basis and presented a clear report',
                    'Managed 20 plus interns without loosing a single one'
                ],
                review: 'Confident'
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