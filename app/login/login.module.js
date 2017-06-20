import angular from 'angular';
import { LoginService } from './login.service';

angular
  .module('loginModule', [])
  .service('loginService', LoginService);

require('./login.component');
