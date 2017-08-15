<template>
<div v-bind:class="['card', {'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div class="content teahouse" > 
      <nuxt-link v-bind:to="{ path: '/teahouses/' + cleanSlug(name) }">
      <h1 class="title"> {{name}}</h1>
      <div class="imgWrapper">
      <!-- src-set is a component I made that can be reused for img elements - have a look inside components/images/SrcSet.vue to understand more -->
      <src-set v-if="isThumbnail" :get-image-src="getImageSrc" :file-name="name +'-thumbnail'" :alt="name" sizes="(max-width: 40em) 212px" />
      <src-set v-else :get-image-src="getImageSrc" :file-name="name" :alt="name" />
      </div>
      </nuxt-link>
      <div class="linksUnderImage">
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'food' }">View Menu</nuxt-link>
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'hours' }">Opening Hours</nuxt-link>
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'contact' }">Contact Us</nuxt-link>
      </div>  
  </div>
</div>
</template>

<script>
import {cleanSlug, small, medium, large} from '~assets/js/shared.js'
let images = require.context('../../assets/images/teahouses/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864
import SrcSet from '~components/images/SrcSet'

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
  components: {
    SrcSet
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
/* v-bind:style="{ backgroundImage: `url('${imgURL}')` }" */
</script>
<style src="~assets/styles/card.scss" lang="scss"></style>
<style scoped>

/* Här överskrider jag den css som finns i assets/styles/card.scss 
(har skrivit card.scss själv, men det är bättre att ha en gemensam fil för delad css) */
.largePreview {
  height:17em;
  width:13.3em;
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
  line-height:2;
  font-size: .9em;
}
.largePreview a .title {
  color:#000;
  line-height:2; 
  height: 2.5em;
  padding:10px;
}
.content a  {
  display: block;
  color:#7d8066; 
}

.content .imgWrapper {
  height:125px;
}

/* --- */


@media(min-width:30em) {
  .largePreview {
    height:27em;
    width:25em;
  }
  .content .imgWrapper {
  height:250px;
}
  .largePreview a .title {
  font-size: 2em;
  height: 2.5em;
}
  .largePreview .linksUnderImage a {
    font-size: 1.1em;
  }
}
</style>

