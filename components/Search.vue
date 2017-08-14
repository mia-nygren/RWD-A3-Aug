<template>
  <div class="wrapper">
    <div class="searchBar">
        <multiselect v-model="value" v-bind:options="optionsArray" :searchable="true" :close-on-select="true" :show-labels="false" v-bind:placeholder="placeholderText" @select="valueSelected"></multiselect>
      <div class="searchResult centered" v-if="displayResults && displayRes()">
        <category-card v-bind:name="result" v-bind:isThumbnail="true" />
      </div>
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
      default: ['Could not find the items...']
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
// Här jag jag avänt mig av vue-multiselect
// https://monterail.github.io/vue-multiselect/
</script>
<!-- OBS!!! vue-multiselect.min.css är CSS som jag inte har skrivit själv - https://monterail.github.io/vue-multiselect/ -->
<style src="../plugins/vue-multiselect/vue-multiselect.css"></style>
<style lang="scss">
@import '~assets/styles/colors.scss';

/* Här överskriver jag den CSS som jag inte vill ha! */

.multiselect__tag,
.multiselect__tag-icon:focus,
.multiselect__tag-icon:after,
.multiselect__tag-icon:hover,
.multiselect__option--highlight,
.multiselect__option--highlight:after,
.multiselect__option--selected.multiselect__option--highlight,
.multiselect__option--selected, 
.multiselect__option--selected.multiselect__option--highlight:after {
  background: $logoGreen !important;
  background-color: $logoGreen !important;
}


.multiselect {
  margin:0 auto;
  width:100%;
}

.multiselect__tags {
  min-width:200px;
}

/* Css för egen kod, såsom visning av sökresultat */

.wrapper {
  text-align: center;
}

.searchBar {
  width: 20em;
  margin: 0 auto;
}

.searchResult {
  display: block;
  margin: 0 auto;
  height: auto;
  margin-top:3em;
}

@media(min-width:30em) {
  .searchResult {
    margin: 0 auto;
    height: auto;
    margin-left: -100px;
  }
}
</style>

