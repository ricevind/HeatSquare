import FriendHtml from './friend.html';

class FriendComponent {}

angular
    .module('utilsModule')
    .component('friend', {
        controller: FriendComponent,
        template: FriendHtml,
        bindings: {
            name: '<',
            surname: '<'
        }
    })