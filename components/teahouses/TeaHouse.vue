<template>
<div v-bind:class="['card', {'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div class="content teahouse" > 
      <nuxt-link v-bind:to="{ path: '/teahouses/' + cleanSlug(name) }">
      <h1 class="title"> {{name}}</h1>
      <div class="imgWrapper">
      <img v-if="isThumbnail" v-bind:src="getBackgroundImageURL(large, name +'_thumbnail', '.jpg')"  />
      <img v-else v-bind:src="getBackgroundImageURL(large, name, '.jpg')" />
      </div>
      </nuxt-link>
      <div class="linksUnderImage">
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'menu' }">View Menu</nuxt-link>
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'hours' }">Opening Hours</nuxt-link>
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'contact' }">Contact Us</nuxt-link>
      </div>  
  </div>
</div>
</template>

<script>
import {cleanSlug, small, medium, large} from '~assets/js/shared.js'
let images = require.context('../../assets/images/teahouses/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    isThumbnail: {
      type: Boolean,
      required: false,
      default: false
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
    cleanSlug (slug) {
      return slug.toLowerCase().split(' ').join('')
    },
    getBackgroundImageURL (size, name, fileEnding) {
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
/* v-bind:style="{ backgroundImage: `url('${imgURL}')` }" */
</script>
<style src="~assets/styles/card.css"></style>
<style scoped>

/* Här överskrider jag den css som finns i assets/styles/card.css 
(har skrivit card.css själv, men det är bättre att ha en gemensam fil för delad css) */
.largePreview {
  height:25em;
  width:25em;
}
.smallPreview {
  height:17em;
}
.smallPreview .content .imgWrapper  {
  height:120px;
}
.teahouse a  {
  display: block;
  color:#7d8066; 
  height:auto;
}
.linksUnderImage {
  padding: 10px 0;
}
.linksUnderImage a {
  height:2em;
}
.content a .title {
  color:#000;
  line-height:2; 
  padding:10px;
}
.content a  {
  display: block;
  color:#7d8066; 
}
.content a .title {
  line-height:2; 
  padding:10px;
}

.content .imgWrapper {
  height:250px;
}
</style>

