function loginRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/user');
  $urlRouterProvider.otherwise('/user');

  $stateProvider
    .state('userDashboard', {
      url: '/user',
      component: 'userDashboard'
    })
    .state('userMap', {
      url: '/userMap',
      component: 'userMap'
    })
}

export default loginRoutes;
