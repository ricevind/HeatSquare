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

  $onChanges(change) {
    const {layerData} = change;
    if (layerData) {
      console.log(layerData)
      this.heatmap.set('data' , this.parseLayerPoints(layerData.currentValue));
    }
  }

  parseLayerPoints(points) {
    if (points) {
      return points.map((point, i) => {
       const p =  { location: new google.maps.LatLng(point[0], point[1]), weight: point[2] ? point[2] : 1};
       return p;
      }).filter((p) => p.weight > 0);
    } else {
      return [];
    }
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById(this.mapId), {
      zoom: 13,
      center: {lat: +this.mapLat, lng: +this.mapLng},
      mapTypeId: 'roadmap'
    });
     this.map.addListener('zoom_changed', ()=>{
      this._onZoom(this.map.getZoom());
    });
  }

  initLayer() {
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data:  this.parseLayerPoints(this.layerData),
      dissipating: false,
      maxIntensity: 5,
      radius: 0.00225,
      map: this.map
    });
  }

  _onZoom(zoomLevel) {
    switch(zoomLevel){
      case 7:
          this.heatmap.set('radius', 0.04);
          break;
      case 8:
          this.heatmap.set('radius', 0.03);
          break;
      case 9:
          this.heatmap.set('radius', 0.02);
          break;
      case 10:
          this.heatmap.set('radius', 0.01);
          break;
      case 11:
          this.heatmap.set('radius', 0.005);
          break;
      case 12:
          this.heatmap.set('radius', 0.0025);
          break;
      case 13:
          this.heatmap.set('radius', 0.00225);
          break;
      case 14:
          this.heatmap.set('radius', 0.00125);
          break;
      case 15:
          this.heatmap.set('radius', 0.00085);
          break;
      case 16:
          this.heatmap.set('radius', 0.00055);
          break;
      default:
          this.heatmap.set('radius', zoomLevel < 7 ? 0.1 : 0.000625);
    }
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
