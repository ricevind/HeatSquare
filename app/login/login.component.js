import loginHtml from './login.html';

class LoginController {
  constructor($log, $state, loginService) {
    this.loginService = loginService;
    this.$state = $state;
    this.$log = $log;

    this.authUri;
    this.isLogged = false;
  }

  $onInit() {
    this.checkLoginState();
  }

  checkLoginState() {
    if (!this._hasToken()) {
      this._prepareLoginUrl();
    } else if (this.loginService.getToken()) {
      this.isLogged = true;
    } else {
      this._logIn();
    }
  }

  logOut() {
    this.loginService.removeToken();
    this.isLogged = false;
    this.authUri = this.loginService.getLoginUrl();
  }

  _hasToken() {
    return this.loginService.extractToken() || this.loginService.getToken();
  }

  _prepareLoginUrl() {
    this.authUri = this.loginService.getLoginUrl();
    this.isLogged = false;
  }

  _logIn() {
    const accesToken = this.loginService.extractToken();
    this.loginService.setToken(accesToken);
    this.$state.go('userDashboard');
    this.isLogged = true;
  }

}

angular
  .module('loginModule')
  .component('loginComponent', {
    controller: LoginController,
    template: loginHtml
  });
