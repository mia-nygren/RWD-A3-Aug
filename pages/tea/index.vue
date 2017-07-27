<template>
  <div class="mainContent">
    <div class="text">
      <h1 class="title centered"> Tea Variaties </h1>
      <p>
        We have a lot of tea variaties! All of them are fairtrade and organic. </p>
        <img class="organic" src="~assets/images/fairTrade.svg" alt="fairTrade">
        <h1> Choose a tea: </h1>
    <div id="searchBar" class="jsOnly">
      <div class="searchbarWrapper">
      <search v-if="showMounted" v-bind:optionsArray="orderedCategoriesSearch" placeholderText="Search tea" />
      </div>
    </div>
    
    </div>
    <div class="categoriesWrapper">
      <div class="lighten">
      <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" v-bind:isThumbnail="false"/>
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
import CategoryCard from '~components/categories/CategoryCard'
import Search from '~components/Search'

// if no municipaliy is chosen then render this
export default {
  layout: 'default',
  components: {
    CategoryCard,
    Search
  },
  head () {
    return {
      title: 'tea2go - tea variaties'
    }
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
    orderedCategories: function () {
      // Ordna json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(teaJSON), 'name')
    },
    orderedCategoriesSearch: function () {
      // Ordna json så det blir rätt i bokstavsordning och ta ut bara namnen
      return _.orderBy(this.jsonToArray(teaJSON), 'name').map(_.property('name'))
    }
  },
  mounted () {
    this.showMounted = true
  }
}
</script>

<style scoped>
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
 .organic {
      width:100px;
      margin:0 auto;
    }
 .searchbarWrapper {
  min-height:65px;
}
@media(min-width:30em) {
  .mainQuestion h1 {
  font-size:1.6em;
}
.organic {
      width:200px;
      margin-left:300px;
    }
}
</style>
