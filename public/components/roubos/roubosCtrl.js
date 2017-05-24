app.controller('RoubosCtrl', [
'$scope',
'auth', 'roubos', 'NgMap', '$mdSidenav', '$log',

function($scope, auth, roubos, NgMap, $mdSidenav, $log ) {
    var vm = this;
    vm.roubos = roubos.roubos;
    vm.isLoggedIn = auth.isLoggedIn;


    vm.toggleRight = buildToggler('right');
    vm.buildToggler = buildToggler;


    function buildToggler(navID) {
         return function() {
           // Component lookup should always be available since we are not using `ng-if`
           $mdSidenav(navID)
             .toggle()
             .then(function () {
               $log.debug("toggle " + navID + " is done");
             });
         }
       }






NgMap.getMap().then(function(map) {
console.log('map', map);
vm.map = map;
}); vm.showDetail = function(e, roubo) {
vm.currentRoubo = roubo;
//   vm.map.showInfoWindow('foo-iw', shop.id);
};


vm.addNew = function() {
var loc = [];
loc.push(vm.roubo.long);
loc.push(vm.roubo.lat);
vm.roubo.loc = loc;
console.log(vm.roubo);
roubos.create(
    vm.roubo
);

console.log("roubo adicionado!");
vm.roubo = "";


};


}]);
