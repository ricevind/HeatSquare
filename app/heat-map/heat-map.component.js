import HeatMapHtml from './heat-map.html';
import { GOOGLE_MAPS } from '../app.config';

class HeatMapComponent {
  constructor($log, $window, NgMap, HeatMapService) {
    this.$log = $log;
    this.$log.log(NgMap);
    this.NgMap = NgMap;
    this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS}`
    this.heatDataResolved;
    this.isGoogle = false;
    this.$window = $window;
    this.HeatMapService = HeatMapService;
  }

  $onInit() {
    this.map = this.NgMap.getMap().then((e)=>{
    this.$log.log('fuck')

      this.$window.heatDataResolved = this.HeatMapService.getMockPoints();
      this.heatDataResolved = this.HeatMapService.getMockPoints();

      console.log('e', e)})
  }

  heatData() {
    if (this.$window.google) {
      this.isGoogle = true;
      this.heatDataResolved = this.HeatMapService.getMockPoints();
    }
  }




}

angular
  .module('app')
  .component('heatMap', {
    controller: HeatMapComponent,
    template: HeatMapHtml
  });
