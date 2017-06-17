import angular from 'angular';
import uirouter from 'angular-ui-router';
import login from './login/login.module';

require('./main.scss');

angular.module('app', [
  uirouter,
  'loginModule'
]);
