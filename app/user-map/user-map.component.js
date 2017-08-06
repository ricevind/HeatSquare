import UserMapHtml from './user-map.html';

class UserMapComponent {
  constructor($state, heatMapService) {
    this.$state = $state;
    this.heatMapService = heatMapService;
    this.layerData = [];
  }

  $onInit() {
    this.userData = this.heatMapService.getMockPoints();
    this.layerData = this.userData;
    this.addPoints = this.heatMapService.getMockPointsOdd();
    this.mid = this.heatMapService.calcMidPoint(this.layerData);
    this.layerDataAdded = this.heatMapService.addLayers(this.layerData, this.addPoints, 0.001)
    this.layerDataSubed = this.heatMapService.subLayers(this.layerData, this.addPoints, 0.001)
  }

  centerMap() {
    const hm = angular.element(document.querySelector('heat-map')).controller('heatMap');
    hm.centerMap();
  }

  goToDashboard() {
    this.$state.go('userDashboard');
  }

  setUserData() {
    this.layerData = this.userData;
  }

  setCompareData() {
    this.layerData = this.addPoints;
  }

  setAddData() {
    this.layerData =  this.layerDataAdded;
  }

  setSubData() {
    this.layerData =  this.layerDataSubed;
  }
}

angular
  .module('app')
  .component('userMap', {
    controller: UserMapComponent,
    template: UserMapHtml,
  });
