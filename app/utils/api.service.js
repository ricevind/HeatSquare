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
    const oAuthUrl = `${url}?oauth_token=${this.token}`;
    return oAuthUrl;
  }

}
