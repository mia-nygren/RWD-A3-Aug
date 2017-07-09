<template>
  <div>
    <div class="text">
      <h1 class="title"> Sortera & Återvinn </h1>
      <p>
        Nedan kan du läsa om hur du sorterar olika avfall. </p>
      <p>
        Ibland sorteras avfall olika beroende på kommun.<br>
        <nuxt-link to="/kommun" class="linkInText"> Välj kommun </nuxt-link>
        för att se vilka undantag som gäller där du bor. </p> 
        <div class="jsOnly">
          <p> Vill du istället söka efter ett speciellt avfall kan du göra det 
            <nuxt-link class="linkInText" v-bind:to="{ path: '/', hash: 'searchBar' }">här</nuxt-link> </p>
      </div>
    </div>
    <div class="categoriesWrapper">
      <div class="lighten">
      <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" />
      </div>
    </div>
    <div class="text">
      <h3> Tack för din insats! </h3>
      <p>När du sorterar och återvinner dina sopor så
        <span class="lenght">hjälper du till med att förbät</span>tra vår miljö. Det behövs fler som du! </p>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import categoriesJSON from '~static/data/categories.json'
import recycleExceptions from '~static/data/recycleExceptions'
import CategoryCard from '~components/categories/CategoryCard'
import Search from '~components/Search'

// if no municipaliy is chosen then render this
export default {
  layout: 'default',
  components: {
    CategoryCard,
    Search
  },
  data () {
    return {
      recycleExceptions,
      municipalityData: null,
      waste: ['Elavfall', 'testing again']
    }
  },
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    orderedCategories: function () {
      // Ordna json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(categoriesJSON), 'name')
    }
  }
}
</script>

<style>
.lenght {
  color:red;
}
 .categoriesWrapper {
   width:100%;
   background-image: url('../assets/images/headerPhoto.jpg'); 
   background-size:cover; 
   text-align:center;
   margin-bottom:40px;
   margin-top:70px;
 }
 .categoriesContainer {
   
 }
</style>
