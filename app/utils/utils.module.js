import angular from 'angular';
import { ApiService } from './api.service';

angular
  .module('utilsModule', [])
  .service('apiService', ApiService);
