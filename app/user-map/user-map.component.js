import UserMapHtml from './user-map.html';

class UserMapComponent {
  constructor(heatMapService) {
    this.heatMapService = heatMapService;
  }

  $onInit() {
    this.layerData = this.heatMapService.getMockPoints();
    this.addPoints = this.heatMapService.getMockPointsOdd();
    this.mid = this.heatMapService.calcMidPoint(this.layerData);
    this.layerDataAdded = this.heatMapService.addLayers(this.layerData, this.addPoints, 0.001)
    console.log('shit', this.layerDataAdded)
  }
}

angular
  .module('app')
  .component('userMap', {
    controller: UserMapComponent,
    template: UserMapHtml,
  });
