<template>
  <div class="footer">
    <footer>
      <div class="footerBase">
        <div class="textWrapper">
          <h4 class="contact centered">Contact us</h4>
          <span class="dot">&#x25C9;</span> <nuxt-link v-bind:to="{ path: '/teahouses/helsingfors', hash:'contact' }">Helsingfors</nuxt-link>
          <span class="dot">&#x25C9;</span><nuxt-link v-bind:to="{ path: '/teahouses/stockholm', hash:'contact' }">Stockholm</nuxt-link>
          <span class="dot">&#x25C9;</span> <nuxt-link v-bind:to="{ path: '/teahouses/oslo', hash:'contact' }">Oslo</nuxt-link>
          <p class="copyright"> &copy; 2017  Tea2Go</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="scss">
@import '~assets/styles/colors.scss';

 .footerBase {
   width:100%;
   padding: 40px 20px;
   background-color: $grey;
   min-height:200px;
   text-align: center;
 }
 .footerBase p {
   display:block;
 }
 .footerBase a {
   display:inline-block;
   font-size:1.1em;
   line-height:1.8;
   padding:0, .3em;
   padding-right:.4em;
 }
 .footerBase a:hover {
   font-weight:700;
 }
 .dot {
   font-size:0.8em;
   line-height:1.8;
   padding:0 .5em;
 }
 .copyright {
   margin-top: 2em;
   font-family: sans-serif;
 }
 .contact {
   font-size:1.2em;
   line-height: 1.2;
   padding: 1.2em 0;
 }

</style>
