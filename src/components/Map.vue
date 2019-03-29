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
      'esri/geometry/Multipoint',
      'esri/Graphic'
    ]).then(([MapView, Map, Multipoint, Graphic]) => {

      var map = new Map({
        basemap: 'gray'
      });

      var view = new MapView({
        container: this.$el,
        map,
        center: [-49.97, 41.73],
        zoom: 10
      })

      console.log(this.geometry.points)

      var mp = new Multipoint({
        points: this.geometry.points,
        spatialReference: { wkid: 4326 }
        // spatialReference: {
        //   wkid: 102100,
        //   latestWkid: 3857
        // }
      })

      // var point = {
      //   type: 'point', // autocasts as new Point()
      //   x: this.geometry.points[0],
      //   y: this.geometry.points[1],
      //   // x: this.geometry.x,
      //   // y: this.geometry.y,
      //   spatialReference: {
      //     wkid: 102100,
      //     latestWkid: 3857
      //   }
      // }

      view.center = mp.extent.center
      // view.center = point

      // view.ui.components = [ "attribution" ]
      // view.on(['mouse-wheel', 'double-click', 'drag'], event => event.stopPropagation())

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
        geometry: this.geometry,
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
