<template>
  <div class="header">
    <header>
      <div class="navWrapper">
        <navigation/>
      </div>
      <!-- Logotype -->
      <logo/>
      <header-image/>
    </header>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Navigation from './Navigation.vue'
import HeaderImage from './Headerimage'

export default {
  components: {
    Logo,
    Navigation,
    HeaderImage
  }
}
</script>

<style>
.header {
    background: #FFF;
    height: auto;
    border-bottom: 10px solid #FFF;
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
@media(min-width:30em) {
  
}
</style>
