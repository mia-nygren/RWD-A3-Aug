<template>
  <div>
    <div class="text">
      <h1 class="title"> {{name}} kommun</h1>
      <div v-if="getRecycleExceptions[0] !== undefined">
        <p>Följande undantag gäller för {{ name }} kommun: </p>
        <!-- Denna logik ska fixas! nu hann jag inte det!! Visar bara första resultatet av undatag TODO -->
        <h3>{{ getRecycleExceptions[0].additionalInfo[0].category }}</h3>
        <p class="exInfo">{{ getRecycleExceptions[0].additionalInfo[0].info }}</p>
      </div>
      <div v-else>
        I {{name}} kommun finns det inga undantag utan allt sorteras som vanligt.
      </div>
      <nuxt-link class="returnBackBtn" to="/kommun">Tillbaka</nuxt-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import recycleExceptions from '~static/data/recycleExceptions' // ett object med avvikningar relaterade till sortering
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    categories: function () {
      // För varje additional info...
    },
    getRecycleExceptions: function () { // TODO fix logic!!
      console.log(recycleExceptions)
      let municipality = _.filter(recycleExceptions, ['municipality', this.name])
      console.log(municipality.additionalInfo)
      return _.filter(recycleExceptions, ['municipality', this.name])
    }
  },
  mounted () {
    console.log(this.name)
  }
}
</script>

<style>
 .text .returnBackBtn {
  margin-top:50px;
  background:#82BFB5;
  text-align:center;
  width:150px;
  height:55px;
  line-height:55px;
  display:block;
  font-weight:700;
  color:#FFF;
}
.text .exInfo{
  margin-top:0.5em;
}
</style>
