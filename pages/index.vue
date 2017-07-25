<template>
  <div class="mainContent">
    <div class="text">
      <h2> Our Tea houses </h2>
      <p> We serve brunch, lunch and afternoon tea. All fresh and daily made! We start our days by baking bread that you can have alongside with your cup of tea! </p>
      <p>Currently we have three teahouses placed in Skandinavia.</p>
    </div>
  <div v-if="showMounted">
        <!-- TeaHouses är en komponent som listar alla tehus man har lagt in, så att de visas i menyn -->
        <TeaHouses v-bind:isThumbnail=true />
      </div>
    <img class="organic" src="~assets/images/fairTrade.svg" alt="fairTrade">
    <div class="text">
      <h2>Organic and fairtrade</h2>
      <p>Our tea houses only serves fairtrade and organic drinks and food. This means that you get to eat fresh and healthy.</p>
      <p>The people we buy our ingredients and teas from are getting a fair price for their products and trades. You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just have a delicious cup of tea on it's own.</p>
  
    </div>
    <h2 class="centered"> Our Tea Varaities </h2>
    <div v-if="showMounted" class="lighten categoriesWrapper">
      <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" v-bind:isThumbnail="true" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import CategoryCard from '~components/categories/CategoryCard'
import teaJSON from '~static/data/tea.json'
import Search from '~components/Search'
import TeaHouses from '~components/teahouses/TeaHouses'

export default {
  layout: 'default',
  components: {
    CategoryCard,
    Search,
    TeaHouses
  },
  data () {
    return {
      showMounted: false
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
    }
  },
  mounted () {
    this.showMounted = true
  }
}

</script>

<style>
.mainContent {
  padding-bottom:50px;
}
 .organic {
      width:180px;
      margin:0 auto;
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
.organic {
      width:250px;
      margin-left:300px;
    }
}
</style>
