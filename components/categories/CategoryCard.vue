<template>
  <div v-bind:class="['card', wrapperClass, {'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div class="content" > 
      <nuxt-link v-bind:to="{ path: '/tea/' +  cleanSlug(name)}">  
      <div class="imgWrapper">
      <img v-if="isThumbnail" v-bind:src="getImageSrc(medium, name +'-thumbnail', fileEnding)" 
        :srcset="getImageSrc(medium, name +'-thumbnail' , fileEnding) + 
        ' 400w' + ',' + getImageSrc(large, name +'-thumbnail', fileEnding) + ' 850w' + ','" sizes="(max-width: 40em) 212px" :alt="name" />
      <img v-else v-bind:src="getImageSrc(medium, name, fileEnding)" 
        :srcset="getImageSrc(medium, name, fileEnding) + 
        ' 400w' + ',' + getImageSrc(large, name, fileEnding) + ' 850w' + ','"  :alt="name" /> 
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
      large,
      fileEnding: '.jpg'
    }
  },
  methods: {
    getImageSrc (size, name, fileEnding) {
      let path = cleanSlug(name) + '-' + size + fileEnding
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

<style src="~assets/styles/card.scss" lang="scss"></style>
 
<style scoped>
/* Här överskrider jag den css som finns i assets/styles/card.scss 
(har skrivit card.scss själv, men det är bättre att ha en gemensam fil för delad css) */

.smallPreview h1 {
  color: #6F6459;
  font-size: 1em;
}

.largePreview {
  height: 14em;
  width: 15em;
}

.largePreview .imgWrapper {
  height: 11em;
}

.largePreview h1 {
  line-height: 2.5em;
}

@media(min-width:30em) {
  .largePreview {
    height: 24em;
    width: 25em;
  }
  .largePreview .imgWrapper {
    height: 20em;
  }
  .largePreview h1 {
    line-height: 3em;
  }
}
</style>

