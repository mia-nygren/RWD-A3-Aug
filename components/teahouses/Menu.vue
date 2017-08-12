<template>
  <div class="wrapper">
    <!-- th = table header , tr = table row , td = table data -->
    <!-- Genom att loopa med 'v-for' så skapas meny-tabellen dynamisk utefter vad för data som ges,
   jag slipper därför att skriva massa tablerows och tabledata för alla saker som finns på menyn -->
    <inner-table title="Drinks" v-bind:items="drinks"/>
    <inner-table title="Breakfast" v-bind:items="breakfast" />
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

.wrapper {
  padding-top:0;
  padding-bottom:4em;
}

</style>
