function loginRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/login');

  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent'
    })
}

export default loginRoutes;
