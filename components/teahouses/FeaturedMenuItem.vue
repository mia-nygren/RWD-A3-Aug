<template>
  <div class="featured">
    <h3> Dessert of the month ({{ month }})</h3>
    <p> Organic Carrot Cake. Price <span class="price">{{price}}kr </span>(usually {{item.price}}kr)</p>
    <div class="imgWrapper">
      <src-set :get-image-src="getImageSrc" file-name="carrotcake" />
    </div>
  </div>
</template>

<script>
import SrcSet from '~components/images/SrcSet'
let images = require.context('../../assets/images/teahouses/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864

export default {
  components: {
    SrcSet
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    }
  },
  methods: {
    getImageSrc (size, name, fileEnding) {
      let path = name.toLowerCase() + '-' + size + fileEnding
      try {
        let image = images('./' + path)
        return image
      } catch (error) {
        console.log('could not find the image at path: ' + path)
      }
    }
  }
}
</script>

<style scoped>
.featured p {
  font-size:1em;
}
.featured {
  padding-bottom:3em;
}
.price {
  font-weight: 700;
}
</style>
