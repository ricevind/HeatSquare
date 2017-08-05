import HeatMapHtml from './heat-map.html';
import { GOOGLE_MAPS } from '../app.config';

class HeatMapComponent {
  constructor() {
    this.mapId = 'map' + Math.random();
   }


  $postLink() {
    setTimeout(() => {
    this.initMap();
    this.initLayer();
    })
  }

  parseLayerPoints(points) {
    if (points) {
      return points.map((point, i) => {
       const p =  { location: new google.maps.LatLng(point[0], point[1]), weight: point[2] ? point[2] : 0};
       return p;
      });
    } else {
      return [];
    }
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById(this.mapId), {
      zoom: 13,
      center: {lat: +this.mapLat, lng: +this.mapLng},
      mapTypeId: 'satellite'
    });
  }

  initLayer() {
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data:  this.parseLayerPoints(this.layerData),
      dissipating: false,
      maxIntensity: 10,
      radius: 0.0015,
      map: this.map
    });
  }
}

angular
  .module('app')
  .component('heatMap', {
    controller: HeatMapComponent,
    template: HeatMapHtml,
    bindings: {
      mapLat: '<',
      mapLng: '<',
      layerData: '<'
    }
  });
