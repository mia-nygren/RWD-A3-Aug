<template>
  <div class="mainContent">
    <div class="text">
      <h1 class="title centered borderBottom"> Tea Variaties </h1>
      <p>
        We have a lot of tea variaties! All of them are fairtrade and organic. Lorem ipsum dolor sit amet, vim offendit gubergren ullamcorper ea, 
        nostrud elaboraret ullamcorper ad vim, deleniti insolens complectitur sea ne. Sint luptatum vim ad, has no laboramus vituperata. Vel nemore propriae eu.</p>
      <div class="imgWrapper">
        <img class="organic" src="~assets/images/organic.svg" alt="organic" />
      </div>
      <h1 class="centered"> Choose a tea: </h1>
        <div class="searchbarWrapper jsOnly">
          <search v-if="showMounted" v-bind:optionsArray="orderedCategoriesSearch" placeholderText="Search tea" />
      </div>
  
    </div>
    <div class="categoriesWrapper seamlessGrungeBackground">
      <div class="lighten">
        <category-card v-for="c in orderedCategories" v-bind:name="c.name" v-bind:key="c.name" v-bind:isThumbnail="false" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import teaJSON from '~static/data/tea.json'
import CategoryCard from '~components/categories/CategoryCard'
import Search from '~components/Search'
let headerImageFileName = 'index'
let title = 'Have a cup of tea that makes a difference!'
let text = 'We make sure that all our tea is fair trade. We also have organic and healthy food - all at a fair price!'

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
  fetch ({ store, params }) {
    // Här utför jag ändringar till store (index.js) som kan hittas under mappen /store/ i root katalogen
    store.commit('changeHeaderTitle', title)
    store.commit('changeHeaderText', text)
    store.dispatch('changeHeaderImageFileName', headerImageFileName)
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
  .mainContent {
    padding-bottom:0;
  }
  .searchbarWrapper {
    margin:0 auto;
  }
  
 .categoriesWrapper {
   width:100%;
   text-align:center;
   margin:70px 0 0 0;
   padding:0;
   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }
 .lighten {
   height:100%;
   padding:50px 0;
 }
 .imgWrapper {
  text-align:center;
  padding-bottom:1em;
 }
 .organic {
      width:200px;
      margin:0 auto;
  }
</style>
