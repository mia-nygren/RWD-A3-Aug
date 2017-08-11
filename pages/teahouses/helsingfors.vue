<template>
  <div class="text">
    <h1 class="title"> {{ getTitle }}</h1>
    ...maybe shoudl've had a teahouse component with title and main image?!
    
    <h1 id="menu" name="menu">MENU</h1>
    <Menu v-bind:drinks="drinks" v-bind:brunch="brunch" />
  
    <div class="imgWrapper">
      <src-set :get-image-src="getImageSrc" file-name="carrotcake" />
      <!-- <img v-bind:src="getImageURL(medium, carrotcake, '.jpg')"
          v-bind:srcset="getImageURL(small, carrotcake, '.jpg') + ' 350w' + ',' + getImageURL(medium, carrotcake , '.jpg') + 
          ' 600w' + ',' + getImageURL(large, carrotcake, '.jpg') + ' 850w' + ',' + getImageURL(large +'-hd', carrotcake, '.jpg') + ' 1300w'" sizes="(max-width: 40em) 100vw, 60vw"/>  -->
    </div>
    <h2 id="hours">Opening Hours </h2>
    <hours />
    <h1 id="contact" name="contact">Contact us </h1>
    <p>Contact information here</p>
    <h1 id="find us" name="find us">Find us </h1>
    <p> Google map?! </p>
  </div>
</template>

<script>
import Hours from '~components/teahouses/opening-hours/helsingfors'
import Menu from '~components/teahouses/Menu'
import SrcSet from '~components/images/SrcSet'
import headerImage from '~assets/images/teahouses/helsingfors-large.jpg'
let images = require.context('../../assets/images/teahouses/', false, /\.jpg$/) // https://stackoverflow.com/a/39910752/4178864
let title = 'Helsingfors'

export default {
  layout: 'teahouse',
  components: {
    Hours,
    Menu,
    SrcSet
  },
  fetch ({ store, params }) {  // Fetch is called before the component renders, and can make changes to the store
    store.commit('changeHeaderImageURL', headerImage) // in this case I change the header image and title
    store.commit('changeHeaderTitle', title)
  },
  computed: {
    getTitle () {
      return this.title
    }
  },
  data () {
    return {
      title: title,
      drinks: [
        {name: 'tea', items: [{name: 'Earl Grey', price: '25'}]},
        {name: 'juice', items: [{name: 'Orange', price: '35'}]}
      ],
      brunch: [
        {name: 'Sallads', items: [{name: 'Beetroot and goat cheese', price: '85'}, {name: 'Salmon and quinoa', price: '85'}]},
        {name: 'Toast', items: [{name: 'Avocado and chillitoast', price: '75'}]}
      ]
    }
  },
  methods: {
    getImageSrc (size, name, fileEnding) {
      let path = name.toLowerCase() + '-' + size + fileEnding
      try {
        let image = images('./' + path)
        return image
      } catch (error) {
        console.log('could not find the image at path: ' + path)
      }
    }
  }
}
</script>
<style scoped>
.imgWrapper img{
  width:100%;
}
.imgWrapper {
  width:100%;
  margin:1em 0 1em;
}
h2 {
  font-size: 1.2em;
  line-height:1.4;
  padding-top:1.2em;
  padding-bottom:1.2em;
}
</style>
