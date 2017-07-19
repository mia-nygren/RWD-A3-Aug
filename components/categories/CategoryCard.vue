<template>
    <div v-if="isMounted" class="card">
        <nuxt-link class="readMoreIMG" v-bind:to="{ path: '/tea/' + cleanSlug(name) }">
        <h2> {{ name }} </h2>
        <div class="categoryIMG">
         <!-- Här bör en bild hamna -->
        </div> </nuxt-link> 
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      summary: null,
      info: null,
      isMounted: false
    }
  },
  methods: {
    cleanSlug (slug) {
      return slug.toLowerCase().split(' ').join('')
    }
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style>
 .card {
  text-align: left;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 2em 0;
  margin-bottom:4em;
  width: 98%;
  min-height:30em;
  height:auto!important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.card h2 {
  padding:20px;
}
.categoryIMG {
    height:200px!important;
    background:#f2f0ef;
    cursor:pointer;
}
.categoryIMG .readMoreIMG {
  display:block;
}

@media (min-width:30em) {
    .card {
        width:30em;
        margin:2em;
    }
}

</style>

