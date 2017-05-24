var app = angular.module('flapperNews', ['ui.router', 'ngMap',
    'ngMessages',
    'ngMaterial'
]);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('indigo');
});



app.controller('MainCtrl', [
    '$scope',
    'posts',
    'auth',
    '$mdSidenav',


    function($scope, posts, auth,$mdSidenav) {



        $scope.toggleLeft = buildToggler('left');


        function buildToggler(componentId) {

            return function() {
              console.log("opening tooggle " + componentId);
                $mdSidenav(componentId).toggle();
            }

        }


        $scope.posts = posts.posts;

        $scope.isLoggedIn = auth.isLoggedIn;

        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            posts.create({
                title: $scope.title,
                link: $scope.link,
            });
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            posts.upvote(post);
        };

    }





])







;
