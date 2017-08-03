<template>
  <section class="container">
   <Header />   
      <div class="main">
          <main>
            <nuxt/><!-- Här hamnar allt sid-innehåll -->        
          </main>
        </div>
    <Footerpart/>
  </section>
</template>

<script>
import Header from '~components/Header'
import Footerpart from '~components/Footer'
import headerI from '~/assets/images/headerPhoto.jpg'

export default {
  components: {
    Header,
    Footerpart
  },
  mounted () {
    this.$store.commit('changeHeaderImageURL', headerI)
  }
}
</script>

<style>
/* den mesta CSS för default.vue är definierad i assets/styles/global.css eftersom den ska gälla för alla sidor */

</style>

