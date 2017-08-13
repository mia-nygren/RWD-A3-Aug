import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps' // https://github.com/xkjyeah/vue-google-maps/blob/HEAD/API.md#getting-started-with-nuxtjs

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAqDlkwAtN7L9hNfuMdZ58fjsYMIEHznK0',
    v: '3.exp'
    // libraries: 'places' // Only if you need Autocomplete
  }
})
// The following components are automatically installed globally
// If you would like to define your own component names,
// see below
// GmapMap
// GmapMarker
// GmapCluster
// GmapInfoWindow
// GmapPolyline
// GmapPolygon
// GmapCircle
// GmapRectangle
// GmapPlaceInput