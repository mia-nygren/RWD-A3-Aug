<template>
  <section class="container">
   <header-component />   
          <main class="main">
            <nuxt/><!-- Här hamnar allt sid-innehåll -->        
          </main>
    <Footerpart/>
  </section>
</template>

<script>
import HeaderComponent from '~components/HeaderComponent'
import Footerpart from '~components/Footer'

export default {
  components: {
    HeaderComponent,
    Footerpart
  }
}
</script>

<style>
/* CSS för default.vue är definierad i assets/styles/global.scss eftersom den ska gälla för alla sidor */
</style>

