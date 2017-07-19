<template>
  <div class="headerImage">
  
    <div class="headlineText">
      <h3>
        Have a cup of tea that <br/> makes a difference! 
      </h3>
      <p> We make sure that all of our tea are fair trade! We also offer ecological food and drinks, all for a fair price! </p>
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
  .headerImage {
    height: 800px;
    background-image: url('../assets/images/headerPhoto.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
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

</style>
