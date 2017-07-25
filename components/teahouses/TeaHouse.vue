<template>
<div v-bind:class="[{'smallPreview': isThumbnail, 'largePreview': !isThumbnail}]">
  <div v-if="isMounted" class="content" > 
      <nuxt-link v-bind:to="{ path: '/teahouses/' + name.toLowerCase() }">
      <h1 class="title"> {{name}}</h1>
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
  background-color:#FFF;
  margin:0 auto;
  margin-bottom:20px;
  text-align: center;
  position:relative;
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
.smallPreview:hover, .largePreview:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.smallPreview {
  width:10em;
  height:15em;
  display:inline-block;
}
.smallPreview .content .imgWrapper  {
  height:120px;
}
.content {
  
}
.content a  {
  display: block;
  color:#7d8066; 
}
.content a .title {
  color:#000;
  line-height:2; 
  padding:10px;
  margin:0;
}
.smallPreview .title {
   font-size:1.2em;
}
.content a:hover {
  color:#000;
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
@media(min-width:90em) {
  .smallPreview, .largePreview {
    display:inline-block;
    margin:20px;
  }
}
</style>

