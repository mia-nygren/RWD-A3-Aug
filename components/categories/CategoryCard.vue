<template>
    <div v-if="isMounted" class="card">
        <nuxt-link class="readMoreIMG" v-bind:to="{ path: '/avfall/' + name.toLowerCase() }">
        <h2> {{ name }} </h2>
        <div class="categoryIMG">
         <!-- Här bör en bild hamna -->
        </div> </nuxt-link> 
        <div class="info"> 
          <p> {{ summary }} ... </p>
          <nuxt-link class="readMore" v-bind:to="{ path: '/avfall/' + name.toLowerCase() }">Läs mer</nuxt-link>
        </div>
    </div>
</template>

<script>
import information from '~static/data/information'
/* TODO - logiken här är för snabbt skriven och behöver ändras och kollas över!!! */
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
    limitCharacters: (text, chars) => {
      let str = text
      if (str !== null & str !== '' & str !== undefined) {
        if (str.length > chars) {
          str = str.substring(0, chars)
        }
      } else {
        str = ''
      }
      return str
    },
    getInfo: () => {
      this.info = information.filter((item) => {
        return item.category === this.name
      })
      try {
        console.log(this.name)
        console.log('name above')
        console.log(this.info)
        if (this.info) {
          this.info = this.info[0].info // todo - make clearer
          this.summary = this.limitCharacters(this.info, 150)
        } else {
          this.info = ''
        }
      } catch (e) {
          // no info
        console.log('no info')
      }
    }
  },
  mounted () {
    this.getInfo()
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
.info {
    padding:10px;
    height:auto;
    border-top:1px solid #000;
}
.info p{
    height:5em;   
}
.info .readMore {
  height:55px;
  display:block;
  line-height:55px;
  font-weight:700;
  font-size:1.2em;
}

@media (min-width:30em) {
    .card {
        width:30em;
        margin:2em;
    }
}

</style>

