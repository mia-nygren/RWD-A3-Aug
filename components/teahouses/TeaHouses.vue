<template>
  <div>
        <TeaHouse v-for="t in orderedTeaHouses" v-bind:name="t.name" />
  </div>
</template>

<script>
import _ from 'lodash'
import citiesJSON from '~/static/data/cities.json'
import TeaHouse from '~/components/teahouses/TeaHouse'
export default {
  layout: 'default',
  components: {
    TeaHouse
  },
  data () {
    return {
      isMounted: false
    }
  },
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {  // Här hämtar jag ut namnen på tehusen som finns. ( I nuläget bara 3 men det kan ju framtiden expandera och då behövs denna kod inte ändras)
    orderedTeaHouses: function () {
      // Ordnar json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(citiesJSON), 'name')
    }
  },
  mounted () {
    this.isMounted = true
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

