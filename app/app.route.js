function loginRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('userDashboard', {
      url: '/user',
      component: 'userDashboard'
    })
  $stateProvider
    .state('heatMap', {
      url: '/heatMap',
      component: 'heatMap'
    })
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'loginComponent'
    })

}

export default loginRoutes;
