<template lang="html">
  <div class="embed-responsive-item"></div>
</template>

<script>
import { loadModules, loadCss } from 'esri-loader'

export default {
  props: ['geometry'],
  mounted () {
    loadCss('https://js.arcgis.com/4.8/esri/css/main.css')

    loadModules([
      'esri/views/MapView',
      'esri/Map',
      'esri/Graphic'
    ]).then(([MapView, Map, Graphic]) => {

      var map = new Map({
        basemap: 'gray'
      });

      var view = new MapView({
        container: this.$el,
        map,
        center: [-49.97, 41.73],
        zoom: 5
      })

      var point = {
        type: 'point', // autocasts as new Point()
        longitude: -49.97,
        latitude: 41.73
      }

      // Create a symbol for drawing the point
      var markerSymbol = {
        type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
        color: [255, 255, 255],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [0, 0, 0],
          width: 2
        }
      }

      // Create a graphic and add the geometry and symbol to it
      var pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol
      })

      view.graphics.add(pointGraphic)

    }).catch(err => {
      // handle any errors
      console.error(err)
    })
  }
}
</script>
