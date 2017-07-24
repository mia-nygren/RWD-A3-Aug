<template>
  <div class="box"> 
  <div class="content">
    <div class="headlineText">
      <h3>
        Have a cup of tea that <br/> makes a difference! 
      </h3>
      <p> We make sure that all of our tea are fair trade! We also offer ecological food and drinks, all for a fair price! </p>
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
    padding-top:100% 
  } 
  .content{   
    position:  absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
     
  .headlineText {
    margin: 0 auto;
    text-align: center;
    width:600px;
    padding-top: 200px;
    font-weight: 400;
    font-size: .8em;
    color: #656263;
    line-height: 1.4;
  }
  .headlineText h3 {
    font-size:4em;
  }
  .headlineText p {
    font-size:1.5em;
  }

  @media(min-width:72em) {
  .box:before {
    padding-top:45% 
  }
  }

</style>
