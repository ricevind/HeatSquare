import { CLIENT_ID, CLIENT_SECRET, TOKEN_NAME, API_URL} from '../app.config';

export class ApiService {
  constructor($log, $state, $http) {
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
    const apiUrl = `${API_URL}/users/${userId}`;
    return this._request(apiUrl);
  }

  fetchUserCheckIns(userId) {
    const apiUrl = `${API_URL}/users/${userId}/checkins`;
    return this._request(apiUrl);
  }

}
