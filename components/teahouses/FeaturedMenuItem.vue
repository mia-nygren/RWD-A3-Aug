<template>
  <div class="featured">
    <h3> Dessert of the month ({{ month }})</h3>
    <p> {{item.name}}. Price <span class="price">{{price}}</span><span v-html="currency"></span> (usually {{item.price}} <span v-html="currency"></span>)</p>
    <div class="imgWrapper">
      <src-set :get-image-src="getImageSrc" :file-name="fileName" />
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
    currency: {
      type: String,
      required: false,
      default: 'SEK'
    },
    month: {
      type: String,
      required: true
    },
    fileName: {
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
.imgWrapper img{
  max-width:100%;
}
.imgWrapper {
  width:100%;
  margin:1em 0 1em;
}
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
