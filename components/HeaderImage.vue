<template>
  <div class="headerImageWrapper">
    <div class="box">
      <div class="content headerImage">
        <picture id="headerImage" class="picture">
          <source :srcset="getHeaderImageURL" media="(min-width: 18em)" >
          <source :srcset="getHeaderImageURL" media="(min-width: 18em)" >
          <img :srcset="getHeaderImageURL" alt="Header Image">
        </picture>
        <!-- <img v-bind:src="getHeaderImageURL" alt="background Image" /> -->
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
    headerIMG: function () {
      // this watches the store state and runs every time the image in the header is changed.
      if (process.BROWSER_BUILD) {
        // For some reason it does not work properly with IE....
        let pic = !!window.HTMLPictureElement // https://stackoverflow.com/a/34743997/4178864
        console.log('PIC ? : ' + pic)
        if (typeof picturefill === 'function' & pic !== true) {
          picturefill({
            reevaluate: true,
            elements: [document.getElementById('headerImage')]
          })
        }
      }
    }
  },
  computed: {
    getHeaderImageURL () {
      return this.$store.state.headerImageURL
    },
    getTitle () { // om titel inte skickas med till componenten som en prop så hämtar den default-titel från filen store/index.js
      return (this.title !== null) ? this.title : this.$store.state.headerTitle
    },
    getText () {
      return (this.text !== null) ? this.text : this.$store.state.headerText
    },
    ...mapGetters({
      headerIMG: 'headerImageURL'
    })
  }
}
</script>

<style>
.picture {
  display:block;
  height:100%;
  background:lightgray;
}
  .headerImageWrapper {
    position:relative;
    z-index:1;
    width:100%;
    height:auto;
    max-height:35em;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.headerImage img {
  width:110%;
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
    padding-top:50%; 
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
    margin-left:-24em;
    z-index:5;
    padding-top: 100px;
    font-weight: 400;
    font-size: .3em;
    line-height: 1.4;
    color: #656263;
  }
  .headlineText h3 {
    font-size:4em;
  }
  .headlineText, .headlineText p {
    text-align: left;
  }
  .headlineText p {
    font-size:3em;
    width:15em; 
    margin:0 auto;
  }


  @media(min-width:18.6em) {
     .headlineText h3 {
      text-align:center!important;
     }
      .headlineText p {
    font-size:2.5em;
    text-align:center!important;
    text-align:justify;
    width:auto;
  }
  }
  @media(min-width:40em) {

  .headlineText {
    width:48em;
    margin-left:-24em;
    font-size: .5em;
    line-height: 1.2;
    padding-top: 110px;
  }
  }

  @media(min-width:55em) {

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
 @media(min-width:62em) {

  
  }
  @media(min-width:80em) {

  }

</style>
