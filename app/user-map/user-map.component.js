import UserMapHtml from './user-map.html';

class UserMapComponent {
  constructor(heatMapService) {
    this.heatMapService = heatMapService;
    console.log(this.heatMapService);
  }

  $onInit() {
    this.layerData = this.heatMapService.getMockPoints();
    this.mid = this.heatMapService.calcMidPoint(this.layerData);
    console.log(this.mid)
  }
}

angular
  .module('app')
  .component('userMap', {
    controller: UserMapComponent,
    template: UserMapHtml,
  });
