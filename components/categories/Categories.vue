<template>
    <div class="categories">
      <ul>
        <li v-for="category in orderedCategories"><nuxt-link v-bind:to="{ path: '/avfall/' + category.name.toLowerCase() }">{{ category.name }}</nuxt-link></li>
    </ul>
    </div>
</template>

<script>
import _ from 'lodash'
import categoriesJSON from '~static/data/categories.json'

/* Här hämtar jag ut kategorierna från en json-fil och listar dem i form av länkar som går till respektive sida för kategorin */
export default {
  methods: {
    jsonToArray (jsonObj) {  // https://stackoverflow.com/a/30153369/4178864
      return jsonObj[Object.keys(jsonObj)[0]]
    }
  },
  computed: {
    orderedCategories: function () {
      // Ordna json så det blir rätt sorterad i bokstavsordning
      return _.orderBy(this.jsonToArray(categoriesJSON), 'name')
    }
  }
}
</script>

<style scoped>
 .categories ul { /* https://www.w3schools.com/css/css3_multiple_columns.asp */
    max-width:85%;
    margin:0 auto;
    margin-top:20px;
    margin-bottom:30px;
    list-style-type: none;
    border:3px solid #000;  
    text-align: left;
 }

 .categories ul li {  
  line-height:2.75em;  /* 44px / 16px = 2.75 */
  background:#FFF;
  border:1px solid black;
}
.categories a {
  padding-left:30px;
  width:100%;
  display:block; /* För att utnyttja den maximala träffytan i list elementet */
}
.categories a:hover {
  background-color:#6fa9a2;
  color:#FFF;
}

@supports( (column-count:3) or (-webkit-column-count: 3) or (-moz-column-count: 3) ) {
  
   @media(min-width:32em) {
    .categories ul { /* https://www.w3schools.com/css/css3_multiple_columns.asp */
      -webkit-column-count: 3; /* Chrome, Safari, Opera */
        -moz-column-count: 3; /* Firefox */
        column-count: 3;
        -webkit-column-gap: 0; /* Chrome, Safari, Opera */
        -moz-column-gap: 0; /* Firefox */
        column-gap: 0;
    }
    .categories a {
      padding-left:10px!important;
    }
    .categories ul {
      max-width:30em!important;
    }
   }
}
</style>

