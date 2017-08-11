<template>
  <section class="container">
   <Header />   
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
import Header from '~components/Header'
import Footerpart from '~components/Footer'

export default {
  components: {
    Header,
    Footerpart
  }
}
</script>

