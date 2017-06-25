import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.route'
import './login/login.module';
import './utils/utils.module';
import './user-dashboard/user-dashboard.module';
require('../node_modules/ngmap/build/scripts/ng-map');

require('./main.scss');

angular.module('app', [
  uirouter,
  'ngMap',
  'utilsModule',
  'loginModule',
  'userDashboardModule'
])
  .config(routing);

