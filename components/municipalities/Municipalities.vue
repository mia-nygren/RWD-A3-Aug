<template>
  <div>
  <ul><!--  <ul v-for='municipality in municipalitesJSON'>  -->  
      <li v-for="m in orderedMunicipalities "> 
        <nuxt-link v-bind:to="{ path: '/kommun/' + m.name.toLowerCase() }"> {{ m.name }} </nuxt-link> </li>
    </ul>
   </div>
</template>

<script>
import _ from 'lodash'
import municipalitesJSON from '~/static/data/municipalities.json'
export default {
  layout: 'default',
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    orderedMunicipalities: function () {
      // Ordnar json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(municipalitesJSON), 'name')
    }
  }
}
</script>

<style scoped>
ul {
  padding-left:1.5em;
  max-width:300px;
  text-decoration: none;
}

ul li {
  height:44px;
  line-height:44px;
}

ul li a {
  display:block;
  height:100%;
}
</style>

