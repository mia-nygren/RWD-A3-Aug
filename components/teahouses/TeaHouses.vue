<template>
  <div>
  <ul><!--  <ul v-for='municipality in municipalitesJSON'>  -->  
      <li v-for="t in orderedTeaHouses"  > 
        <nuxt-link v-bind:to="{ path: '/teahouses/' + t.name.toLowerCase() }"> {{ t.name }} </nuxt-link>  view opening hours</li>
    </ul>
   </div>
</template>

<script>
import _ from 'lodash'
import citiesJSON from '~/static/data/cities.json'
export default {
  layout: 'default',
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    orderedTeaHouses: function () {
      // Ordnar json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(citiesJSON), 'name')
    }
  }
}
</script>

<style scoped>
ul {
  padding-left:1.5em;
  text-decoration: none;
  list-style-type: none;
}

ul li {
  height:44px;
  line-height:44px;
}

ul li a {
  display:block-inline;
  height:100%;
}
</style>

