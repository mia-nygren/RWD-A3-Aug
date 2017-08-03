<template>
  <div class="mainContent">
    <div class="centered startWrapper">
      <h2>Our teahouses</h2>
      <p>We have three teahouses placed in Scandinavia.</p>
      <!-- <p>state = {{ $store.state }}</p> -->
    </div>
      <!-- TeaHouses är en komponent som listar alla tehus man har lagt in, så att de visas i menyn -->
      <tea-houses v-bind:is-thumbnail="isThumbnail" />
    <div class="text">
      <p> We serve brunch, lunch and afternoon tea. All fresh and daily made! We start our days by baking bread that you can have alongside with your cup of tea! </p>
    </div>
    <div class="organicWrapper">
      
      <div class="text">
        <img class="leaf" src="~assets/images/leaf.svg" alt="leaf">
        <h2>Organic and fairtrade</h2>
        <p>Our tea houses only serves fairtrade and organic drinks and food. This means that you get to eat fresh and healthy.</p>
        <p>The people we buy our ingredients and teas from are getting a fair price for their products and trades. You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just have a delicious cup of tea on it's own.</p>
      </div>
    </div>
    <h2 class="text"> Our Tea Varaities </h2>
    <div class="lighten categoriesWrapper">
      <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" v-bind:is-thumbnail="isThumbnail" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import CategoryCard from '~components/categories/CategoryCard'
import teaJSON from '~static/data/tea.json'
import Search from '~components/Search'
import TeaHouses from '~components/teahouses/TeaHouses'

let title = 'Have a cup of tea that makes a difference!'
let text = 'We make sure that all of our tea are fair trade! We also have organic food and drinks, all for a fair price!'

export default {
  layout: 'default',
  components: {
    CategoryCard,
    Search,
    TeaHouses
  },
  fetch ({ store, params }) {
    store.commit('changeHeaderTitle', title)
    store.commit('changeHeaderText', text)
  },
  data () {
    return {
      isThumbnail: true
    }
  },
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    extractName: function (obj) {
      return obj.name
    },
    orderedCategories: function () {
      // Ordna json så det blir rätt i bokstavsordning och ta ut bara namnen
      return _.orderBy(this.jsonToArray(teaJSON), 'name')
    },
    getTitle () {
      return this.title
    }
  }
}

</script>

<style>

  .leaf {
    width:13em;
    float:right;
    margin-top:-1.4em;
    margin-left:4em;
  }

.categoriesWrapper {
   width:100%;
   text-align:center;
   margin-bottom:40px;
   margin-top:70px;
   background: #7d8066;
 }
@media(min-width:30em) {
  .mainQuestion h1 {
  font-size:1.6em;
}

}
.organicWrapper {
  background-color:#F1EDE9;
  padding:5em 0;
}
.startWrapper {
  color:#7d8066;
}

</style>
