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

<style>
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

