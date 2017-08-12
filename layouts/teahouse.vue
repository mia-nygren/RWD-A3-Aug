<template>
  <section class="container">
   <header-component />   
      <div class="main">
          <main>
            <div class="mainContent">
            <nuxt/><!-- Här hamnar allt sid-innehåll -->   
            </div>     
          </main>
        </div>
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

