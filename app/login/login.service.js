export class LoginService {
  constructor($state) {
    this.$state = $state;
  }

  title() {
    return this.$state.current.name;
  }
}
