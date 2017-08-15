<template>
  <div class="footer">
    <footer>
      <div class="footerBase">
        <div class="textWrapper">
          <h4 class="contact centered">Contact us</h4>
          <div>
          <nuxt-link v-bind:to="{ path: '/teahouses/helsingfors', hash:'contact' }"><span class="dot">&#x25C9;</span> Helsingfors</nuxt-link>
          <nuxt-link v-bind:to="{ path: '/teahouses/stockholm', hash:'contact' }"><span class="dot">&#x25C9;</span> Stockholm</nuxt-link>
          <nuxt-link v-bind:to="{ path: '/teahouses/oslo', hash:'contact' }"><span class="dot">&#x25C9;</span> Oslo</nuxt-link>
          </div>
          <p class="copyright">Tea2Go &copy; 2017 </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped lang="scss">
@import '~assets/styles/colors.scss';

.footerBase {
  width: 100%;
  padding: 40px 20px;
  background-color: $grey;
  min-height: 200px;
  text-align: center;
}

.footerBase p {
  display: block;
}

.footerBase a {
  margin: 0 auto;
  display: block;
  font-size: 1.1em;
  line-height: 1.8;
  width: 8em;
  text-align: left;
  padding: 0 0.2em;
  padding-right: .6em;
}

.footerBase a:hover {
  font-weight: 700;
}

.dot {
  font-size: 0.8em;
  line-height: 1.8;
  padding: 0 .5em;
}

.copyright {
  margin-top: 3em;
  font-family: sans-serif;
  color: $mediumGrey;
}

.contact {
  font-size: 1.2em;
  line-height: 1.2;
  padding: 1.2em 0;
}

@media(min-width:19.6em) {

  .footerBase a {
    display: block;
  }
}

@media(min-width:36.6em) {

  .footerBase a {
    display: inline-block; 
  }
  .textWrapper div {
    margin-left: 3em;
  }
}

</style>
