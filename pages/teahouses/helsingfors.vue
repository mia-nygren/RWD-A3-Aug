<template>
    <div class="text">
      <h1 class="title"> {{ getTitle }}</h1>
      <div class="imgWrapper">
      <img src="~assets/images/teahouses/large/helsingfors.jpg" /> <!-- have this large as HEADERIMAGE instead! -->
      </div>
      <h1 id="hours">Hours </h1>
        <p>Contact information here</p>
        <hours monday="10am-18pm" tuesday="10am-18pm" wednesday="10am-19pm" thursday="10am-19pm" friday="12am-21pm" sathurday="12am-21pm" sunday="Closed" />
         ...maybe shoudl've had a teahouse component with title and main image?!

        <h1 id="menu" name="menu" >MENU</h1>
        <Menu v-bind:drinks="drinks" v-bind:brunch="brunch"/>
        <h1 id="contact" name="contact" >Contact us </h1>
        <p>Contact information here</p>
    </div>
</template>

<script>
import Hours from '~components/teahouses/Hours'
import Menu from '~components/teahouses/Menu'
import headerImage from '~assets/images/teahouses/helsingfors_large.jpg'

let title = 'Helsingfors'

export default {
  layout: 'teahouse',
  components: {
    Hours,
    Menu
  },
  fetch ({ store, params }) {
    store.commit('changeHeaderImageURL', headerImage)
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
  }
}
</script>
<style scoped>
.imgWrapper img{
  width:100%;
}
.imgWrapper {
  width:100%;
}
</style>
