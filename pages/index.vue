<template>
  <div class="mainQuestion">
    <h1> Choose a tea: </h1>
    <div id="searchBar" class="jsOnly">
      <div class="searchbarWrapper">
      <search v-if="showMounted" v-bind:optionsArray="orderedCategories" placeholderText="Search tea" />
      </div>
      <div class="imageWrapper">
      
      </div>
    </div>

    <p class="complementText jsOnly"> Choose a tea: </p>
    <div v-if="showMounted">
    <categories/>
    </div>
    <!-- Om användaren inte har Javascript hamnar bilden nedanför kategorierna istället -->
    <!-- <noscript>
      <img src="~assets/images/lookingUp.png" alt="Tjej i naturen" />
    </noscript> -->

    <div class="text">
      <h2> Hur sopsorterar jag? </h2>
      <p> Se våran sorteringsguide under
        <nuxt-link class="linkInText" to="/sortera">Sortera & Återvinn</nuxt-link>
        för att få en översikt på vad man kan sortera och hur. </p>

      <h2>Varför ska jag sortera?</h2>
      <p> Att sortera är viktigt för miljön. Lorem ipsum dolor sit amet, an mutat atomorum tractatos sit. Vim propriae delicata
        no. At vis feugait consequat, nec eu possit expetenda persequeris. Sumo interesset te vel, nam labores fuisset in,
        usu in viris moderatius appellantur. Ex laudem aperiam volumus mea, in nibh illud praesent sit. </p>
      
      <h2> Välj kommun </h2>
      <p>För att se vilka undantag som gäller i din kommun kan du välja din kommun nedan:</p>
      <div v-if="showMounted">
      <!-- Municipalites är en komponent som listar alla kommuner man har lagt in, så att de visas i menyn -->
      <Municipalities />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '~components/categories/Categories.vue'
import _ from 'lodash'
import teaJSON from '~static/data/tea.json'
import Search from '~components/Search'
import Municipalities from '~components/municipalities/Municipalities'

export default {
  layout: 'default',
  components: {
    Categories,
    Search,
    Municipalities
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
      // Ordna json så det blir rätt sorterad i bokstavsordning och ta ut bara namnen för söklistan
      return _.orderBy(this.jsonToArray(teaJSON), 'name').map(_.property('name'))
    }
  },
  mounted () {
    this.showMounted = true
  }
}
</script>

<style>
.mainQuestion {
  text-align: center;
}
.mainQuestion h1 {
  font-size:1.2em;
  line-height:2em;
}
.mainQuestion img {
  max-width:100%;
  padding:20px 0;
}
.mainQuestion .text {
  text-align:left;
}
.complementText {
  font-style:italic;
  font-size:0.9em;
  line-height:1.2;
}
.searchbarWrapper {
  min-height:65px;
}
.imageWrapper {
  min-height: 360px;
}
@media(min-width:30em) {
  .mainQuestion h1 {
  font-size:1.6em;
}
}
</style>
