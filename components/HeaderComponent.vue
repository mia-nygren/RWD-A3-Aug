<template>
  <div class="header">
    <header class="header">
      <navigation/>
      <!-- Header Image: Renderas bara utifall en bild är vald för denna -->
      <header-image />
      <!-- Logotype -->
      <div class="logoWrapper lighten">
        <logo/>
      </div>
    </header>
  </div>
</template>

<script>
import headerImage from '~components/HeaderImage'
import Navigation from '~components/Navigation'
import Logo from '~components/Logo'

export default {
  components: {
    headerImage,
    Navigation,
    Logo
  }
}
</script>

<style>
.logoWrapper {
  position:relative;
  z-index: 777;
  padding:5px;
  padding-top:7px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);
}
</style>

