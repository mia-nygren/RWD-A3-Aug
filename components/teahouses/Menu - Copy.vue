<template>
<div v-if="isMounted"> 
  <table  v-for="category in menu.categories" v-bind:key="category">
    <!-- th = table header , tr = table row , td = table data --> 
    <!-- Genom att loopa med 'v-for' så skapas meny-tabellen dynamisk utefter vad för data som ges,
  jag slipper därför att skriva massa tablerows och tabledata för alla saker som finns på menyn -->
    <tr >
      <th scope="col" colspan="2">{{capitalize(category)}}</th> <!-- category kan vara till exempel drinks -->
</tr>
     <tr scope="col" colspan="2" v-for="item in getItemsOfCategory(category)" v-bind:key="item.name">
       <th scope="col" colspan="2">iih</th>
       </tr>
       
          <td scope="col" colspan="2">{{capitalize(item.name)}}</td> <!-- till exempel Tea, som är en subkategori -->
          <td v-for="i in item.items" v-bind:key="i.name">yolo</td>
      </tr>
     
  </table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    currency: {
      type: String,
      required: false,
      default: 'kr'
    }
  },
  data () {
    return {
      isMounted: false,
      'menu': {
        'items': [
          {
            'name': 'tea',
            'items': {
              'name': 'Earl Grey',
              'price': 25
            },
            'category': 0
          },
          {
            'name': 'pepsi',
            'qty': 20,
            'category': 0,
            'sizes': ['small', 'large']
          },
          {
            'name': 'water',
            'qty': 20,
            'category': 0,
            'sizes': ['small', 'large']
          },
          {
            'name': 'hamburger',
            'qty': 40,
            'category': 1,
            'sizes': ['small', 'large']
          },
          {
            'name': 'fries',
            'qty': 20,
            'category': 1,
            'sizes': ['small', 'large']
          },
          {
            'name': 'pizza',
            'qty': 20,
            'category': 1,
            'sizes': ['small', 'large']
          }
        ],
        'categories': [
          'drinks',
          'food'
        ]
      }
    }
  },
  methods: {
    capitalize (text) {
      return _.capitalize(text)
    },
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
  },
  mounted () {
    this.isMounted = true
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
display:block; 
width:100%;
background:blue;
}

td, th { border: 1px solid #CCC; } 
dl {margin:0; padding:0;}
dl dt{font-weight:bold; float:left;}
dl dd{margin:0 0 2px 90px; padding:0;}


.outerTable {
  background:green;
}
.innerTable {
  background:red;
  display: block;
  width:100%;
} 
</style>
