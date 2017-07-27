<template>
  <section class="container">
    <div>        
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
import Footerpart from '~components/Footer.vue'

export default {
  components: {
    Footerpart
  }
}
</script>

<style>
/* viss CSS är definierad i assets/styles/global.css eftersom den ska gälla för alla sidor */
</style>

