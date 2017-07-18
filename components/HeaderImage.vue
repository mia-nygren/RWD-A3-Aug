<template>
<div class="natureBackground">
                    
                    <div class="slogan">
                        <h3>
                            - välkommen till tehuset!
                        </h3>
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
.natureBackground { 
    height:800px;
     background-image: url('../assets/images/headerPhoto.jpg'); 
     background-size:100%; 
     background-repeat:no-repeat;
}
.logoComponent {
    position:absolute;
    top:0;
    right:10px;
 }
 .slogan {
    margin:0 auto;  
    text-align: center;
    height:120px;
    padding-top:70px;
    font-weight: 400;
    font-style: italic;
	font-size: .8em;
    color:#656263;
    line-height:1.4;
 }
 .slogan h3 {
    padding-top:.8em; 
}

 @media(min-width:30em) {
    .logoComponent {
        position:absolute;
        top:0;
        right:15px;
    }
}
</style>
