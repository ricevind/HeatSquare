import { CLIENT_ID, CLIENT_SECRET, TOKEN_NAME} from '../api-key';

export class ApiService {
  constructor($log, $state, $http, $location) {
    this.$log = $log;
    this.$http = $http;
    this._getToken();
  }

  _getToken() {
    this.token = localStorage.getItem(TOKEN_NAME);
  }

  _request(url) {
    const oAuthUrl = `${url}?oauth_token=${this.token}&v=20170625&m=swarm`;
    return this.$http.get(oAuthUrl);
  }

  fetchActingUserData() {
    return this.fetchUserData('self');
  }

  fetchActingUserCheckIns() {
    return this.fetchUserCheckIns('self');
  }

  fetchUserData(userId) {
    const apiUrl = `https://api.foursquare.com/v2/users/${userId}`;
    return this._request(apiUrl);
  }

  fetchUserCheckIns(userId) {
    const apiUrl = `https://api.foursquare.com/v2/users/${userId}/checkins`;
    return this._request(apiUrl);
  }

}
