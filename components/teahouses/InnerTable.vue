<template>
  <div v-if="items.length > 0">
    <!-- th = table header , tr = table row , td = table data -->
    <!-- Genom att loopa med 'v-for' så skapas meny-tabellen dynamisk utefter vad för data som ges,
       jag slipper därför att skriva massa tablerows och tabledata för alla saker som finns på menyn -->
    <h2 class="menuTitle" v-if="title !== null">{{title}}</h2>
    <table v-for="item in items" v-bind:key="item">
      <thead>
        <tr>
          <th scope="col" colspan="2">{{capitalize(item.name)}}</th>
          <!-- drink kan vara till exempel juice -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in item.items" v-bind:key="i.name">
          <td class='item'>{{i.name}} </td>
          <td class='price'>{{i.price}} <span v-html="currency"></span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    currency: {
      type: String,
      required: false,
      default: 'SEK'
    },
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    capitalize (text) {
      return _.capitalize(text)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/styles/colors.scss';

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

th {
  padding: 1em 0 .5em 0;
  text-align: left;
}
td {
   border-bottom: 1px dotted $lightBrown;
}

tr {
  width: 100%;
}

.text .menuTitle {
  padding-top: 1.2em !important;
  font-size: 1.2em !important;
}

.item {
  min-width: 50%;
  text-align: left;
}

.price {
  min-width: 3em;
  text-align: right;
  color: $mediumGrey;
}

.price span {
  font-size:0.8em; 
  color: $mediumGrey;
}
</style>

