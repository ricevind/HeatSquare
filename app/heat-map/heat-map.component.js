import HeatMapHtml from './heat-map.html';
import { GOOGLE_MAPS } from '../app.config';

class HeatMapComponent {
  constructor() {
    this.googleMapsLayersUrl = `https://maps.google.com/maps/api/js?libraries=placeses,visualization,drawing,geometry,places?key=${GOOGLE_MAPS}`;
  }

  $onInit() {
    this.loadScripts();
  }

  parseLayerPoints(points) {
    console.log(points)
    if (points) {
      return points.map((point) => new google.maps.LatLng(...point));
    } else {
      return [];
    }
  }

  loadScripts() {
    this.googleMapScript().then(() => {
      this.initMap();
      this.initLayer();
    });
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: +this.mapLat, lng: +this.mapLng},
      mapTypeId: 'satellite'
    });
  }

  initLayer() {
    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data:  this.parseLayerPoints(this.layerData),
      map: this.map
    });
  }

  googleMapScript() {
    const maps = document.createElement('script');
    maps.type = 'text/javascript';
    maps.async = true;
    maps.src = this.googleMapsLayersUrl;
    
    return new Promise((resolve, reject) => {
      maps.onload = maps.onreadystatechange = () => { 
        resolve();
      };
      angular.element(document.getElementsByTagName('body')[0].append(maps));
    });
  }

  // googleMapsLayersScript() {
  //   const layers = document.createElement('script');
  //   layers.type = 'text/javascript';
  //   layers.async = true;
  //   layers.src = this.googleMapsLayersUrl;

  //   return new Promise((resolve, reject) => {
  //     layers.onload = layers.onreadystatechange = () => { 
  //       resolve();
  //     };
  //     angular.element(document.getElementsByTagName('body')[0].append(layers));
  //   });
  // }

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
