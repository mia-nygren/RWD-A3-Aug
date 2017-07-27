<template>
  <section class="container">
    <div class="header">
      <header>
        <div class="navWrapper">
          <navigation/>
        </div>
        <!-- Header Image -->
        
        <header-image/>  
      
        <!-- Logotype -->
      <div class="logoWrapper lighten">
        <logo/>
        </div> 
      </header>  
      
      </div>    
      <div class="main">
          <main>
            <!-- Här hamnar allt sid-innehåll -->
            <nuxt/>        
          </main>
        </div>
    <Footerpart/>
  </section>
</template>

<script>
import Logo from '~components/Logo'
import Navigation from '~components/Navigation'
import headerImage from '~components/HeaderImage'
import Footerpart from '~components/Footer'

export default {
  components: {
    Navigation,
    headerImage,
    Logo,
    Footerpart
  }
}
</script>

<style>
/* den mesta CSS för default.vue är definierad i assets/styles/global.css eftersom den ska gälla för alla sidor */
.header {
    background: #FFF;
    height: auto;
    position: relative;
}
.navWrapper {
    box-sizing: initial;
    background: #FFF;
    height: 50px;
    position: absolute;
    z-index: 999;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);
}
.logoWrapper {
  padding:10px;
  padding-top:13px;
  position:relative;
  display: block;
  width:100%;
  height:6em;
  margin-top:-6em;
}

.lighten {
  background-image:url("~assets/images/lighten.png");
}
</style>

