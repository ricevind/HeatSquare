import userDashboardHtml from './user-dashboard.html';

export class UserDashboardComponent {
  constructor($log, apiService) {
    this.apiService = apiService;
    this.$log = $log;
  }

  $onInit() {
    this.$log.log('init')
    this.$log.log(this.apiService.fetchActingUserData());
    this.$log.log(this.apiService.fetchActingUserCheckIns());
  }
}

angular
  .module('userDashboardModule')
  .component('userDashboard', {
    controller: UserDashboardComponent,
    template: userDashboardHtml
  });
