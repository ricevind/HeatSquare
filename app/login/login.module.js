import angular from 'angular';
import { LoginService } from './login.service';
import routing from './login.route';

angular
  .module('loginModule', [])
  .service('loginService', LoginService)
  .config(routing);

require('./login.component');
