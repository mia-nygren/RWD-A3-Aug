<template>
<div v-if="items.length > 0">
 <h2 v-if="title !== null">{{title}}</h2>
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
        <td class='price'>{{i.price}} {{currency}}</td> 
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
      default: 'kr'
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

