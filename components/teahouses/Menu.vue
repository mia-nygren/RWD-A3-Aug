<template>
  <div class="wrapper">
    <h1 id="food" class="centered" name="menu">MENU</h1>
    <inner-table title="Breakfast" v-bind:items="breakfast" :currency="currency"/>
    <inner-table title="Brunch" v-bind:items="brunch" :currency="currency"/>
    <inner-table title="Lunch" v-bind:items="lunch" :currency="currency"/>
    <inner-table title="Drinks" v-bind:items="drinks" :currency="currency"/>
    <inner-table title="Dessert" v-bind:items="dessert" :currency="currency"/>
    
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
      default: 'SEK'
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
h2 {
  font-size: 1.2em;
  line-height:1.4;
  padding-top:1.2em;
  padding-bottom:1.2em;
}
#food {
  font-size:1.2em;
  border-bottom: 2px solid #000;
  margin-top:2em;
}

</style>
