import loginHtml from './login.html';

class LoginController {
  constructor($log, loginService) {
    this.loginService = loginService;
    this.$log = $log;

    this.authUri;
    this.isLogged = false;
  }

  $onInit() {
    this.$log.log(this.loginService.extractToken());
    if (!this.loginService.extractToken() && !this.loginService.extractToken()) {
      this.authUri = this.loginService.getLoginUrl();
      this.isLogged = false;
    } else if (this.loginService.getToken()) {
      this.isLogged = true;
    } else {
      const accesToken = this.loginService.extractToken();
      this.loginService.setToken(accesToken);
      this.isLogged = true;
      this.$log.log(accesToken);
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
