<template>
    <div v-bind:class="['card', wrapperClass, {'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div class="content" > 
      <nuxt-link v-bind:to="{ path: '/tea/' +  cleanSlug(name)}">
      
      <div class="imgWrapper">
      <img  v-if="isThumbnail" v-bind:src="getImageURL(large, name +'_thumbnail', '.jpg')" />
      <img v-else v-bind:src="getImageURL(large, name, '.jpg')" />
      </div>
      <h1 class="title centered"> {{name}}</h1>
      </nuxt-link>
  </div>
</div>
</template>

<script>
import {cleanSlug, small, medium, large} from '~assets/js/shared.js'
let images = require.context('../../assets/images/tea/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    isThumbnail: {
      type: Boolean,
      required: false,
      default: false
    },
    wrapperClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      cleanSlug,
      small,
      medium,
      large
    }
  },
  methods: {
    getImageURL (size, name, fileEnding) {
      let path = name.toLowerCase() + '_' + size + fileEnding
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

<style src="~assets/styles/card.css"></style>
 
<style scoped>
/* Här överskrider jag den css som finns i assets/styles/card.css 
(har skrivit card.css själv, men det är bättre att ha en gemensam fil för delad css) */
.smallPreview h1{
  color:#6F6459;
  font-size:1em;
}
.largePreview {
  height:24em;
}

</style>

