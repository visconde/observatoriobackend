app.factory('roubos', ['$http', 'auth', function($http, auth){
  var o = {

  };
  o.roubos = [];

  o.getAll = function() {
    return $http.get('/roubos').success(function(data){
      angular.copy(data, o.roubos);
    });
  };

 o.create = function(roubo) {
   return $http.post('/roubos', roubo, {
     headers: {Authorization: 'Bearer '+auth.getToken()}
   }).success(function(data){
    o.roubos.push(roubo);
   });

};


o.get = function(id) {
  return $http.get('/roubos/' + id).then(function(res){
    return res.data;
  });
};




  return o;
}]);
