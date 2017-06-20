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
    if (!this.loginService.extractToken() && !this.loginService.getToken()) {
      this.authUri = this.loginService.getLoginUrl();
      this.isLogged = false;
    } else if (this.loginService.getToken()) {
      this.isLogged = true;
    } else {
      const accesToken = this.loginService.extractToken();
      this.loginService.setToken(accesToken);
      this.$state.go('userDashboard')
      this.isLogged = true;
    }
  }

  logOut() {
    this.loginService.removeToken();
    this.isLogged = false;
    this.authUri = this.loginService.getLoginUrl();
  }
}

angular
  .module('loginModule')
  .component('loginComponent', {
    controller: LoginController,
    template: loginHtml
  });
