<template>
<div v-bind:class="[{'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div v-if="isMounted" class="content" > 
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase() }">
      <h1> {{name}}</h1>
      <div class="imgWrapper">
      <img v-bind:src="getBackgroundImageURL(name +'.jpg')" />
      </div>
      </nuxt-link>
      <nuxt-link class="linkUnderImage" v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'menu' }">View Menu</nuxt-link>
      <nuxt-link class="linkUnderImage" v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'hours' }">Opening Hours</nuxt-link>
      <nuxt-link class="linkUnderImage" v-bind:to="{ path: '/teahouses/' + name.toLowerCase(), hash:'contact' }">Contact Us</nuxt-link>
      
  </div>
</div>
</template>

<script>
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
      isMounted: false
    }
  },
  methods: {
    getBackgroundImageURL (path) {
      return images('./' + path.toLowerCase())
    }
  },
  mounted () {
    this.isMounted = true
  }
}
/* v-bind:style="{ backgroundImage: `url('${imgURL}')` }" */
</script>

<style scoped>

.smallPreview, .largePreview {
  margin:10px;
  position:relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  height:25em;
  width:25em;
}
.smallPreview:before, .largePreview:before {
  content:'';
  position:absolute;
  display:block;
  top:0;
  left:0;
  bottom:0;
  right:0;
  padding-top:100%;
}
.content {
  border:1px solid red;
}
.content a  {
  display:block;
}
.linkUnderImage {
  line-height:2;
}
.content .imgWrapper {
  height:250px;
  overflow:hidden;
}
.content img {
  width:100%;
}
</style>

