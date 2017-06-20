import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.route'
import './login/login.module';
import './utils/utils.module';
import './user-dashboard/user-dashboard.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  'loginModule',
  'utilsModule',
  'userDashboardModule'
])
  .config(routing);

