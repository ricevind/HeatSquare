import HeatMapHtml from './heat-map.html';
import { GOOGLE_MAPS } from '../../api-key';

class HeatMapComponent {
  constructor($log, NgMap) {
    $log.log(NgMap);
    this.googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS}`
  }
}

angular
  .module('utilsModule')
  .component('heatMap', {
    controller: HeatMapComponent,
    template: HeatMapHtml
  });
