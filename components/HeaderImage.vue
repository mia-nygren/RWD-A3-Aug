<template>
  <div class="box"> 
  <div class="content">
    <div class="headlineText">
      <h3>
        Have a cup of tea that <br/> makes a difference! 
      </h3>
      <p> We make sure that all of our tea are fair trade! We also have organic food and drinks, all for a fair price! </p>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imageURL: {
        type: String,
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
    z-index:1;
  }
  .box:before {
    content:'';
    display:block;
    padding-top:110% 
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
  @media(min-width:18.6em) {
     .headlineText {
    font-size: .4em;
    text-align:center;
     }
      .headlineText p {
    font-size:2.5em;
    text-align:center;
    width:auto;
  }
   .box:before {
    content:'';
    display:block;
    padding-top:80% 
  }
  }
  @media(min-width:40em) {
  .box:before {
    padding-top:45% 
  }
  .headlineText {
    width:48em;
    font-size: .5em;
    line-height: 1.2;
    padding-top: 110px;
  }
  }

  @media(min-width:55em) {
  .box:before {
    padding-top:36em;
  }
   .headlineText {
    font-size: .8em;
    line-height: 1.4;
    padding-top: 200px;
  }
   .headlineText p {
    font-size:2em;
    margin-top:10px;
  }
  }
 @media(min-width:62em) {
  .box:before {
    padding-top:36em;
  }
 
  }
  @media(min-width:80em) {
  .box:before {
    padding-top:38em;
  }
  }

</style>
