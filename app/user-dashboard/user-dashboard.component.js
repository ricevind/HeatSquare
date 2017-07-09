import userDashboardHtml from './user-dashboard.html';

class UserDashboardComponent {
  constructor($log, apiService) {
    this.apiService = apiService;
    this.$log = $log;
  }

  $onInit() {
    this.$log.log('init')
    this.$log.log(this.apiService.fetchActingUserData());
    this.$log.log(this.apiService.fetchActingUserCheckIns());
    this.$log.log(this.apiService.fetchActingUserFriends());
  }
}

angular
  .module('userDashboardModule')
  .component('userDashboard', {
    controller: UserDashboardComponent,
    template: userDashboardHtml
  });
