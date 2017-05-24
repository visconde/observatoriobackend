app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/components/posts/posts.html',
      controller: 'MainCtrl',
	   resolve: {
    postPromise: ['posts', function(posts){
      return posts.getAll();
    }]
  }
    })
	.state('posts', {
  url: '/posts/{id}',
  templateUrl: '/components/posts/comments.html',
  controller: 'PostsCtrl',
  resolve: {
    post: ['$stateParams', 'posts', function($stateParams, posts) {
      return posts.get($stateParams.id);
    }]
  }
})
.state('login', {
  url: '/login',
  templateUrl: '/components/auth/login.html',
  controller: 'AuthCtrl',
  onEnter: ['$state', 'auth', function($state, auth){
    if(auth.isLoggedIn()){
      $state.go('home');
    }
  }]
})
.state('register', {
  url: '/register',
  templateUrl: '/components/auth/register.html',
  controller: 'AuthCtrl',
  onEnter: ['$state', 'auth', function($state, auth){
    if(auth.isLoggedIn()){
      $state.go('home');
    }
  }]
})
.state('roubos', {
  url: '/roubos',
  templateUrl: '/components/roubos/roubos.html',
  controller: 'RoubosCtrl as vm',
  controllerAs: 'roubosCtrl',
  resolve: {
    post: ['$stateParams', 'roubos', function($stateParams, roubos) {
      return roubos.getAll();
    }]
  }
})
.state('tables', {
  url: '/tables',
  templateUrl: '/startbootstrap-sb-admin-gh-pages/tables.html'
})
http://localhost:3000/startbootstrap-sb-admin-gh-pages/bootstrap-elements.html
;

  $urlRouterProvider.otherwise('home');
}]);
