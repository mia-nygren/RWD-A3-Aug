<template>
  <div class="mainContent">
    <div class="centered startWrapper">
      <h2 class="centered">Our teahouses</h2>
      <p>We have three teahouses placed in Scandinavia.</p>
      <!-- <p>state = {{ $store.state }}</p> TODO -->
    </div>
      <!-- TeaHouses är en komponent som listar alla tehus man har lagt in, så att de visas i menyn -->
      <tea-houses :is-thumbnail="true" />
    <div class="text">
      <p> We serve brunch, lunch and afternoon tea. All fresh and daily made! We start our days by baking bread that you can have alongside with your cup of tea! </p>
    </div>
    <div class="organicWrapper">
      <div class="text">
        <img class="leaf" src="~assets/images/leaf.svg" alt="leaf">
        <h2>Organic and fairtrade</h2>
        <p>Our tea houses only serves fairtrade and organic drinks and food. This means that you get to eat fresh and healthy.</p>
        <p>The people we buy our ingredients and teas from are getting a fair price for their products and trades. 
          You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just have a delicious cup of tea on it's own.</p>
      </div>
    </div>
    
    <div class="categoriesWrapper seamlessGrungeBackground">
      <h2 class="centered greyText"> Our Tea Varaities </h2>
      <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" :is-thumbnail="true" />
    </div>
    <opening-hours />
  </div>
</template>

<script>
import _ from 'lodash'
import CategoryCard from '~components/categories/CategoryCard'
import teaJSON from '~static/data/tea.json'
import Search from '~components/Search'
import TeaHouses from '~components/teahouses/TeaHouses'
import OpeningHours from '~components/teahouses/opening-hours/OpeningHours'

// Här definerar jag titel och text som ska vara i headerimage på startsidan
let title = 'Have a cup of tea that makes a difference!'
let text = 'We make sure that all our tea is fair trade. We also have organic and healthy food - all at a fair price!'
let headerImageFileName = 'index'

export default {
  layout: 'default',
  components: {
    CategoryCard,
    Search,
    TeaHouses,
    OpeningHours
  },
  fetch ({ store, params }) {
    // store.commit('')
    store.commit('changeHeaderTitle', title)
    store.commit('changeHeaderText', text)
    store.dispatch('changeHeaderImageFileName', headerImageFileName)
  },
  watch: {
    watchThumbnail: function () {
      this.isThumbnail = true
    }
  },
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    orderedCategories: function () {
      // Ordna json så det blir rätt i bokstavsordning och ta ut bara namnen
      return _.orderBy(this.jsonToArray(teaJSON), 'name')
    }
  }
}
</script>

<style lang="scss" scoped >
@import '~assets/styles/colors.scss';  // Importerar enbart variables och fördubblar inte CSS

.boxy {
  position:relative;
}
.boxy:before {
  content:'';
  display:block;
  padding-top:30%;
}
.content {
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  // background-image:url($imagePATH);

}
.test-pic {
  float: left;
  width: 250px;
  @media screen and (max-width: 320px) {
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    float: none;
  }
}

.main {
  padding-bottom: 50px;
}
.leaf {
  width: 10em;
  float: right;
  margin-top: -1.4em;
  margin-left: 0;
}

.categoriesWrapper {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  padding: 50px 0;
}

.categoriesWrapper h2 {
  color: #000;
  padding-bottom: 1em;
}

.organicWrapper {
  background-color: #F9F5F2;
  background-repeat: no-repeat;
  background-size: 100%;
  min-height: 400px;
  padding:70px 0;
  margin-top:4em;
}

.greyText {
  color: #7d8066;
}

@media (min-width:55em) {
  .leaf {
    width: 13em;
    margin-left: 4em;
  }
}
</style>
