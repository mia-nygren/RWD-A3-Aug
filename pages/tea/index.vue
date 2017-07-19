<template>
  <div>
    <div class="text">
      <h1 class="title"> Tea Variaties </h1>
      <h3> Organic and Fair trade </h3>
      <p>
        We have a lot of tea variaties! All of them are organic and fairtrade. </p>
    
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
import teaJSON from '~static/data/tea.json'
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
      return _.orderBy(this.jsonToArray(teaJSON), 'name')
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
   background-image: url('../../assets/images/headerPhoto.jpg'); 
   background-size:cover; 
   text-align:center;
   margin-bottom:40px;
   margin-top:70px;
 }
 .categoriesContainer {
   
 }
</style>
