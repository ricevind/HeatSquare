import UserMapHtml from './user-map.html';

class UserMapComponent {
  constructor(heatMapService) {
    this.heatMapService = heatMapService;
    console.log(this.heatMapService);
  }

  $onInit() {
    this.layerData = this.heatMapService.getMockPoints();
    console.log('kayer', this.layerData)
  }
}

angular
  .module('app')
  .component('userMap', {
    controller: UserMapComponent,
    template: UserMapHtml,
  });
