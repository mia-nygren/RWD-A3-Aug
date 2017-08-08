<template>
  <div class="wrapper">
    <!-- th = table header , tr = table row , td = table data -->
    <!-- Genom att loopa med 'v-for' så skapas meny-tabellen dynamisk utefter vad för data som ges,
   jag slipper därför att skriva massa tablerows och tabledata för alla saker som finns på menyn -->
    <inner-table title="Drinks" v-bind:items="drinks"/>
    <inner-table title="Brunch" v-bind:items="brunch"/>
    <inner-table title="Lunch" v-bind:items="lunch"/>
  </div>
</template>

<script>
import _ from 'lodash'
import InnerTable from '~components/teahouses/InnerTable'
export default {
  props: {
    currency: {
      type: String,
      required: false,
      default: 'kr'
    },
    drinks: {
      type: Array,
      required: false,
      default: () => []
    },
    breakfast: {
      type: Array,
      required: false,
      default: null
    },
    brunch: {
      type: Array,
      required: false,
      default: () => []
    },
    lunch: {
      type: Array,
      required: false,
      default: () => []
    },
    dessert: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  components: {
    InnerTable
  },
  methods: {
    getCategoryId (category) {
      return this.menu.categories.indexOf(category)
    },
    getItemsOfCategory (category) {
      // I want to get all the items that share the same subcategory ...for example drinks...
      // To determine if they have the same subcategory the category.indexOf(subcategory) has to match the item.subcategory
      let categoryId = this.getCategoryId(category) // example 0
      // now get All the items with the value of categoryId
      return _.filter(this.menu.items, ['category', categoryId])
    }
  },
  computed: {
    orderItems (items, name) {
      return _.orderBy(items, name)
    }
  }
}
</script>

<style scoped>
table {  
    width: 100%; 
    border-collapse: collapse; 
    border-spacing: 0;
}
tr { 
width:100%;
}
/*
td, th { border: 1px solid #CCC; } 
dl {margin:0; padding:0;}
dl dt{font-weight:bold; float:left;}
dl dd{margin:0 0 2px 90px; padding:0;}
*/
.wrapper {
  border: 3px double #ccc;
  padding:.5em;
}
.item {
  background:green;
  width:70%;
}
.price {
  width:50%;
  background:red;
}
</style>
