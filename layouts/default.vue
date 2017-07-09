<template>
  <section class="container">
    <div>
      <top/>        
      <div class="main">
        <main>
          <nuxt/>        
        </main>
      </div>
    </div>
    <Footerpart/>
  </section>
</template>

<script>
import Top from '~components/Top.vue'
import Footerpart from '~components/Footer.vue'

export default {
  components: {
    Top,
    Footerpart
  }
}
</script>

<style>
/* CSS för default.vue är definierad i assets/styles/global.css eftersom den ska gälla för alla sidor */
</style>

