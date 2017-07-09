<template>
  <div class="searchBar">
    <div>
      <multiselect v-model="value" v-bind:options="optionsArray" :searchable="true" 
      :close-on-select="true" :show-labels="false" v-bind:placeholder="placeholderText" @select="valueSelected"></multiselect>
    </div>
    <div class="searchResult" v-if="displayResults && displayRes()">
      <category-card v-bind:name="result" />
    </div>
  </div>
</template>
<script>
import CategoryCard from '~components/categories/CategoryCard.vue'
import Multiselect from 'vue-multiselect'
// import vSelect from 'vue-select'
// var vSelect = require('vue-select').VueSelect
/* if (process.BROWSER_BUILD) {
  var vSelect = require('vue-select').VueSelect
} */
export default {
  props: {
    optionsArray: {
      type: Array,
      default: ['Listan kunde inte hämtas...']
    },
    placeholderText: {
      type: String,
      default: ''
    },
    parentMethod: {
      type: Function,
      required: false,
      default: null
    }
  },
  components: {
    Multiselect,
    CategoryCard
  },
  data () {
    return {
      value: null,
      selected: false,
      match: true,
      displayResults: false,
      result: ''
    }
  },
  methods: {
    valueSelected (value) {
      console.log('RUUUNS VALUE SELECTED!!!!')
      console.log(value)
      if (value !== '' && value !== null) {
        this.displayResults = true
        if (typeof value === 'string' || value instanceof String) { // the value is a string https://stackoverflow.com/a/9436948/4178864
          this.result = value
          console.log('sets results to')
          console.log(this.result)
        }
      } else {
        this.displayResults = false
      }
    },
    displayRes () {
      if (this.result !== '' && this.result !== null) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    this.match = true
  }
}
// Här jag jag avänt mig av vue-select
// https://sagalbot.github.io/vue-select/
</script>
<!-- OBS!!! vue-multiselect.min.css är CSS som jag inte har skrivit själv - https://monterail.github.io/vue-multiselect/ -->
<style src="../plugins/vue-multiselect/vue-multiselect.css"></style>
<style>
/* Här överskriver jag den CSS som jag inte vill ha! */
.v-select {
    width: 14em;
    margin: 0 auto;
    margin-left:-40px;
}
.searchBar {
  max-width:10em;
  margin:0 auto!important;
}

/* Css för egen kod, såsom visning av sökresultat */
.searchResult {
 margin:0 auto;
 height:auto;
 margin-left:-40px; /* sista-minuten css vet inte varför det hamnar som det gör.... TODO */
}
@media(min-width:30em) {
  .searchBar {
    max-width:20em;
  }
  .v-select {
    width: 25em;
  }
  .searchResult {
  margin:0 auto;
  height:auto;
  margin-left:-100px; /* sista-minuten css vet inte varför det hamnar som det gör.... TODO */
}
}
</style>

