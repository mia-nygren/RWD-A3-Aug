<template>
    <div class="text">
        <h1> {{ name }} </h1>
        <p> Information om {{ name }} här + bild </p>
        <div class="categoryIMG"> 
        </div>
        <p class="notComplete"> Detta är en prototypsida, som jag inte har hunnit att styla,
          men som jag har tänkt mig ska innehålla bild och information om den valda kategorin.</p>
        <h3>Avvikelser:  </h3>
        <p> I dessa kommuner sorteras {{ name }} på ett annorlunda vis. Läs vad som gäller där du bor genom att klicka på din kommun.</p>
    </div>
</template>

<script>
import information from '~static/data/information'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      summary: null,
      info: null,
      image: null
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
    }
  },
  mounted () {
    this.info = information.filter((item) => {
      return item.category === this.name
    })
    try {
      if (this.info) {
        this.info = this.info[0].info // todo - make clearer
        this.summary = this.limitCharacters(this.info, 150)
      } else {
        this.info = ''
      }
    } catch (e) {
        // no info
    }
  }
}
</script>

<style>
 .card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  width: 98%;
  height:30em;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.notComplete {
  color:red;
}

@media (min-width:30em) {
    .card {
        width:30em;
    }
}

</style>

