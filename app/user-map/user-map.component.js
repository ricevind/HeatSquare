import UserMapHtml from './user-map.html';

class UserMapComponent {}

angular
  .module('app')
  .component('userMap', {
    controller: UserMapComponent,
    template: UserMapHtml,
  });
