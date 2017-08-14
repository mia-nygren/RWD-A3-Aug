<template>
  <div class="headerImageWrapper">
    <div class="box">
      <div class="content headerImage">
        <picture id="headerImage" class="picture">
          <!-- true decides if image is 2x (hd/retina) -->
          <!--[if IE 9]><video style="display: none;"><![endif]-->
          <source :srcset="`${getImageSrc(small)} 1x, ${getImageSrc(small, true)} 2x`" media="(max-width: 899px)" >
          <source :srcset="`${getImageSrc(medium)} 1x, ${getImageSrc(medium, true)} 2x`" media="(min-width:900px) and (max-width: 1919px)" >
          <source :srcset="`${getImageSrc(large)} 1x, ${getImageSrc(large, true)} 2x`" media="(min-width: 1920px)" >
          <!--[if IE 9]></video><![endif]-->
          <img :src="getImageSrc(medium,true)" :srcset="`${getImageSrc(medium)} 1x, ${getImageSrc(medium, true)} 2x`" alt="Header Image">
        </picture>
        <div class="headlineText">
          <h3>
            {{ getTitle }}
          </h3>
          <p>{{ getText }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {small, medium, large} from '~assets/js/shared.js'
let images = require.context('../assets/images/header/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864
let picturefill = null
if (process.BROWSER_BUILD) { // För att det bara ska hämtas och köras på client sidan
  picturefill = require('picturefill')
}
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    text: {
      type: String,
      required: false,
      default: null
    }
  },
  watch: {
    headerImageFileName: function () {
      // this watches the store state and runs every time the image in the header is changed.

      if (process.BROWSER_BUILD) {
        // For some reason it does not work properly with IE....
        let pic = !!window.HTMLPictureElement // https://stackoverflow.com/a/34743997/4178864
        if (typeof picturefill === 'function' & pic !== true) {
          picturefill({
            reevaluate: true,
            elements: [document.getElementById('headerImage')]
          })
        }
      }
    }
  },
  data () {
    return {
      small,
      medium,
      large
    }
  },
  computed: {
    getHeaderImageFileName () {
      return this.$store.state.headerImageFileName
    },
    getTitle () { // om titel inte skickas med till componenten som en prop så hämtar den default-titel från filen store/index.js
      return (this.title !== null) ? this.title : this.$store.state.headerTitle
    },
    getText () {
      return (this.text !== null) ? this.text : this.$store.state.headerText
    },
    ...mapGetters({
      headerImageFileName: 'headerImageFileName'
    })
  },
  methods: {
    getImageSrc (size, hd = false) {
      let path = this.$store.state.headerImageFileName.toLowerCase() + '-' + size
      if (hd) {
        path += '-hd'
      }
      path += '.jpg'
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

<style lang="scss">
@import '~assets/styles/colors.scss';

/* Här blev det rörigt och med snabba css-fix, för att jag skulle hinna med deadline...
Denna kod skulle kunna skrivas om och göras mycket bättre, speciellt i scss. */

.picture {
  display:block;
  height:100%;
  background:$lightGrey;
}
.headerImageWrapper {
    position:relative;
    z-index:1;
    width:100%;
    height:auto;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.headerImage img {
  width:100%;
  float:right;
  clear:both;
}
  .box { /* Tip taken from a tutorial/article http://www.mademyday.de/css-height-equals-width-with-pure-css.html */ 
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height:100%;
  }
  .box:before {
    content:'';
    display:block;
    padding-top:70%; 
  } 
  .content{   
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    overflow: hidden
}
  .headlineText {
    position:absolute;
    top:0;
    left:50%;
    right:0;
    bottom:0;
    margin-left:-14em;
    width:22em; /* width is related and affected by the font-size! */
    z-index:5;
    padding-top: 56px;
    font-weight: 400;
    font-size: .18em;
    line-height: 1.4;
    color: #656263;
  }
  .headlineText, .headlineText p {
    text-align: left;
  }
  .headlineText h3 {
    font-size:4em;
  }
  .headlineText p {
    font-size: 2.5em;
    margin-top:5px;
  }

  @media(min-width:12.5em) { /* 200px - very small devices */
    .headlineText {
      padding-top:60px;
      font-size:.2em;
      width:24em;
      margin-left:-15em;
    }
  }  
   @media(min-width:14.25em) { /* 200px - very small devices */
    .headlineText {
      padding-top:65px;
      width:24em;
      margin-left:-16em;
    }
  }
   @media(min-width:15.5em) { /* 200px - very small devices */
    .headlineText {
      padding-top:60px;
      font-size:.25em;
      width:29em;
      margin-left:-18em;
    }
  }         
  @media(min-width:18em) {
    .headlineText {
      padding-top:70px;
      font-size:.3em;
      width:36em;
      margin-left:-22em;
    }
  }
  @media(min-width:21em) {
    .headlineText {
      padding-top:62px;
      font-size:.35em;
      font-size:.4em;
      width:50em;
      margin-left:-24em;
    }
  }
   @media(min-width:26.5em) {
    .headlineText {
      padding-top:50px;
    }
  }

   @media(min-width:28em) {
    .headlineText {
      padding-top:90px;
      font-size:.5em;
    }
  }

   @media(min-width:37.5em) {
    .headlineText {
      padding-top:90px;
      font-size:.6em;
    }
  }

  @media(min-width:40em) { /* Uses small image in picture element */ 
  .headlineText {
    width:50em;
  }
  .headlineText h3 {
    text-align:left !important;
  }
  .headlineText {
    text-align:left !important;
    font-size: .7em;
    line-height: 1.4;
    padding-top: 110px;
    margin-left:-25em;
  }
   .headlineText p {
    margin-top:10px;
    text-align:left!important;
  }
  }
  @media(min-width:45em) {
 
   .headlineText {
    font-size: .75em;
    padding-top: 130px;
  }
  }
  @media(min-width:55em) {
    box:before {
      padding-top:35%; 
    } 
   .headlineText {
    font-size: .8em;
    line-height: 1.4;
    padding-top: 150px;
  }
   .headlineText p {
    font-size:2em;
    margin-top:10px;
  }
  }

  @media(min-width:56.25em) { /*  900px -  Uses medium size image in picture element */
    .box:before {
      padding-top:28.5em; 
    } 
    .headlineText {
      font-size: .65em;
      margin-left:-15em;
      padding-top: 120px;
    }
  }
  @media(min-width:65em) {
    .box:before {
      padding-top:33em; 
    } 
  }
  @media(min-width:71em) {
    .headlineText {
      font-size:.7em;
      padding-top: 150px;
    }
  } 
  @media(min-width:78em) {
     .headlineText {
      font-size:.9em;
    }
  }
   @media(min-width:82em) {
    .box:before {
      padding-top:41em; 
    } 
     .headlineText {
      font-size:1em;
      padding-top: 180px;
    }
  }
  @media(min-width:120em){ /*  1920px -  Uses large size image in picture element */
    .headerImageWrapper {
      max-height:35em;
    }
    .headlineText {
      font-size:.9em;
      margin-left:-25em;
      padding-top: 120px;
    }
    .headlineText h3{
      text-align: center !important;
    }
    .headlineText p{
      text-align: center !important;
    }
    .box:before {
      padding-top:31em; 
    }
  }
</style>
