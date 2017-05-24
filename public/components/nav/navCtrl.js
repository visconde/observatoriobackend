app.controller('NavCtrl', [
    '$scope',
    'auth',
    function($scope, auth) {
        var vm = this;
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentUser = auth.currentUser;
        $scope.logOut = auth.logOut;

        vm.show = function() {
            console.log("hideeees");
        }

    }
]);
