import { CLIENT_ID, CLIENT_SECRET, TOKEN_NAME } from '../app.config';

const FOURSQUARE_LOGIN = 'https://foursquare.com/oauth2/authenticate';

export class LoginService {
  constructor($log, $state, $http, $location) {
    this.$state = $state;
    this.$log = $log;
    this.$http = $http;
    this.$location = $location;
  }

  title() {
    return this.$state.current.name;
  }

  getToken() {
    const token = localStorage.getItem(TOKEN_NAME);
    return token ? token : null;
  }

  extractToken() {
    const access_token = this.$location.hash().split('=')[1];
    return access_token ? access_token : null;
  }

  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  removeToken() {
    localStorage.removeItem(TOKEN_NAME);
  }

  getLoginUrl() {
    const baseUrl = this.$location.absUrl();
    const url = `${FOURSQUARE_LOGIN}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${baseUrl}`;
    return url;
  }
}
