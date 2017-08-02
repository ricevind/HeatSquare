import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.route'
import './login/login.module';
import './utils/utils.module';
import './user-dashboard/user-dashboard.module';
import {HeatMapService} from './heat-map/heat-map.service';
require('../node_modules/ngmap/build/scripts/ng-map');

require('./main.scss');

angular.module('app', [
  uirouter,
  'utilsModule',
  'loginModule',
  'userDashboardModule'
]).service('heatMapService', HeatMapService)
  .config(routing);

require('./user-map/user-map.component');
require('./heat-map/heat-map.component');
