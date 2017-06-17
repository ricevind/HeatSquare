import loginHtml from './login.html';

class LoginController {
  constructor(loginService) {
    this.loginService = loginService;
  }

  $onInit() {
    this.title = this.loginService.title();
  }
}

angular
  .module('loginModule')
  .component('loginComponent', {
    controller: LoginController,
    template: loginHtml
  });
