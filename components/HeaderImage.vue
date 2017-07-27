<template>
  <div class="headerImageWrapper">
    <div class="box">
      <div class="content">
        <div class="headlineText">
          <h3>
            {{ title }}
          </h3>
          <p>{{ text }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: false,
        default: 'Have a cup of tea that makes a difference!'
      },
      text: {
        type: String,
        required: false,
        default: 'We make sure that all of our tea are fair trade! We also have organic food and drinks, all for a fair price!'
      },
      imageURL: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style>
  .box { /* Tip taken from a tutorial/article http://www.mademyday.de/css-height-equals-width-with-pure-css.html */ 
    position: relative;
    background-image: url('../assets/images/headerPhoto.jpg');
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
}
  .headlineText {
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
    margin:0 auto;
  }
  .headlineText p {
    font-size:3em;
    width:15em; 
  }
  .headerImageWrapper {
  height:auto;
  height:25em;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
  @media(min-width:18.6em) {
     .headlineText {
    font-size: .4em;
    text-align:center;
     }
      .headlineText p {
    font-size:2.5em;
    text-align:justify;
    width:auto;
  }
  .headerImageWrapper {
    height: 30em;
  }
  }
  @media(min-width:40em) {

  .headlineText {
    width:48em;
    font-size: .5em;
    line-height: 1.2;
    padding-top: 110px;
  }

  }

  @media(min-width:55em) {

   .headlineText {
    font-size: .8em;
    line-height: 1.4;
    padding-top: 200px;
  }
   .headlineText p {
    font-size:2em;
    margin-top:10px;
  }
  .headerImageWrapper {
    height:38em;
    max-height:38em;
  }
  }
 @media(min-width:62em) {

  
  }
  @media(min-width:80em) {

  }

</style>
