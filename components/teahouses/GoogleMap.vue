<template>
   <div class="map-container">
    <gmap-map class="gmap" :center="coordinates" :zoom="12">
      <gmap-marker :position="coordinates">
      </gmap-marker>
      <gmap-info-window v-if="infoText !==null" :position="coordinates">
        {{ infoText }}
      </gmap-info-window>
    </gmap-map>
  </div>
</template>

<script>

export default {
  watch: {
    '$route' (to, from) {
      // Call resizePreserveCenter() on all maps
      this.$gmapDefaultResizeBus.$emit('resize')
    }
  },
  props: {
    infoText: {
      type: String,
      required: false,
      default: null
    },
    coordinates: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/colors.scss';  

  .map-container {
    min-width:200px;
    width: 100%;
    min-height: 100px;
    margin-bottom:4em;
  }
  .gmap {
    min-height:300px;
  }
  @media(min-width:30em) {
    .map-container {
      min-height: 400px;
    }
    .gmap {
      height:400px;
      min-height:400px;
  }
  }

  </style>
