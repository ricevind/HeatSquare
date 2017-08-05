import userDashboardHtml from './user-dashboard.html';

class UserDashboardComponent {
  constructor($log, $state, apiService) {
    this.apiService = apiService;
    this.$log = $log;
    this.$state = $state;
  }

  $onInit() {
    this.$log.log(this.apiService.fetchActingUserData());
    this.$log.log(this.apiService.fetchActingUserCheckIns());
    this.$log.log(this.apiService.fetchActingUserFriends());
  }

  goToUserMap() {
    this.$state.go('userMap');
  }
}

angular
  .module('userDashboardModule')
  .component('userDashboard', {
    controller: UserDashboardComponent,
    template: userDashboardHtml
  });
