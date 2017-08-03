<template>
  <div class="teaHouseWrapper"> 
    <div class="innerWrapper">
        <tea-house v-for="t in orderedTeaHouses" v-bind:name="t.name" v-bind:is-thumbnail="isThumbnail" v-bind:key="t.name"/>
        </div>
  </div>
</template>

<script>
import _ from 'lodash'
import citiesJSON from '~/static/data/cities.json'
import TeaHouse from '~/components/teahouses/TeaHouse'

export default {
  layout: 'default',
  props: {
    isThumbnail: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    TeaHouse
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
  }
}
</script>

<style scoped>
.teaHouseWrapper {
  min-height:20em;
  height:auto !important;
  width:100%;
  padding:20px 0 20px;
  text-align: center;
  display:block;
}
.innerWrapper {
  margin:0 auto;
}
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

