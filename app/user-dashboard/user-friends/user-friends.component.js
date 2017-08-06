import userFriendsHtml from './user-friends.html';

class UserFriendsComponent {
  constructor(userFriendsService) {
    this.ufs = userFriendsService;
  }

  $onInit() {
    this.ufs
      .getFriends()
      .then((friends) => {
        this.friends = friends;
      });
  }
}

angular
  .module('userDashboardModule')
  .component('userFriends', {
    controller: UserFriendsComponent,
    template: userFriendsHtml
  });
