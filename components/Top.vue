<template>
    <div class="header">
        <header>
            <div class="navWrapper">
                <navigation/>
            </div>
            <div class="natureBackground">
                <div class="lighten">
                    <div class="logoComponent">
                        <logo/> <!-- Logotype -->
                    </div>
                    <div class="slogan">
                        <h3>
                            - Vi hjälper dig att sortera rätt!
                        </h3>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>

<style>
.natureBackground { 
    height:200px;
}
 .header {
     background:#FFF;    
     height:auto;
     background-position:32em; 
     border-bottom:10px solid #FFF;
     background-image: url('../assets/images/headerPhoto.jpg'); 
     background-size:cover; 
 }
 .navWrapper {
     box-sizing:initial;
     background-image: url('../assets/images/sloganBK.png');
	 background-repeat:y;
     height:51px;
     box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);
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
.lighten {
    background-image: url('../assets/images/sloganBK.png');
	background-repeat:y;
    height:100%;
}
 @media(min-width:30em) {
    .logoComponent {
        position:absolute;
        top:0;
        right:15px;
    }
}
</style>
