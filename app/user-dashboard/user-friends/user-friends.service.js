class UserFriendsService {
  constructor(apiService) {
    this.apiService = apiService;
  }

  getFriends() {
    return this.apiService.fetchActingUserFriends()
      .then((httpResponse) => {
        const friends = httpResponse.data.response.friends;
        return new Promise((resolve, reject) => {
          resolve(friends);
        }); 
      });
  }
}

angular
  .module('userDashboardModule')
  .service('userFriendsService', UserFriendsService);
