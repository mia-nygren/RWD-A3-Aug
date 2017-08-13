<template>
  <div class="text">
    <h1 class="title centered"> {{ getTitle }}</h1>
    <p> Welcome to our tea house in {{ getTitle }}. Our goal is to only serve fairtrade and organic food. 
    And we are well on our way! The items on our menu is a healthy choice for everyone.
    <p>Every day our staff bake bread that is ready for breakfast. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Vivamus eget imperdiet arcu.</p>
    
    <Menu :drinks="drinks" :brunch="brunch" :breakfast="breakfast" currency="SEK" />

   <featured-menu-item :item="{name: 'Chocolate Brownie', price: '35'}" price="15" month="August" fileName="brownie" currency="SEK"/>
   
    <h3> Vegan food and/or allergies?</h3>
    <p>Don't worry, we have plenty of options, just ask! </p>

    <h1 id="find us" name="find us">Find us </h1>
    <p> Address: <a href="https://www.google.se/maps/place/Stockholm" target="-blank">{{title}}</a>  ... </p>
    <google-maps class="jsOnly" infoText="Tea2go in Stockholm" :coordinates="{lat: 59.346152, lng: 18.067175}" />
    
    <h1 id="contact" name="contact">Contact us </h1>
    <p>Contact information here</p>
    
    <h2 id="hours">Opening Hours </h2>
    <hours />
   
  </div>
</template>

<script>
import Hours from '~components/teahouses/opening-hours/helsingfors'
import Menu from '~components/teahouses/Menu'
import headerImage from '~assets/images/teahouses/stockholm-large.jpg'
import FeaturedMenuItem from '~components/teahouses/FeaturedMenuItem'
import GoogleMaps from '~components/teahouses/GoogleMap'

let title = 'Stockholm'

export default {
  layout: 'teahouse',
  components: {
    Hours,
    Menu,
    FeaturedMenuItem,
    GoogleMaps
  },
  fetch ({ store, params }) {  // Fetch is called before the component renders, and can make changes to the store
    store.commit('changeHeaderImageURL', headerImage) // in this case I change the header image and title
    // store.commit('changeHeaderTitle', title)
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
        {name: 'tea', items: [{name: 'Earl Grey', price: '25'}, {name: 'Green tea', price: '25'}, {name: 'Oolong', price: '25'}, {name: 'White tea', price: '25'}, {name: 'Yellow tea', price: '25'}]},
        {name: 'juice', items: [{name: 'Orange', price: '35'}, {name: 'Apple, carrot and ginger', price: '45'}]}
      ],
      brunch: [
        {name: 'Sallads', items: [{name: 'Beetroot and goat cheese', price: '85'}, {name: 'Salmon and quinoa', price: '85'}]},
        {name: 'Toast', items: [{name: 'Tomato, cheese and salsa', price: '55'}, {name: 'Avocado and chillitoast', price: '55'}]}
      ],
      breakfast: [
        {name: 'Bread/Toast', items: [{name: 'Mushroom toast with chestnuts', price: '55'}, {name: 'Toasted organic croissant', price: '40'}]},
        {name: 'Porrige', items: [{name: 'Gluten free organic porridge', price: '35'}, {name: 'Blueberry porrige', price: '85'}]},
        {name: 'Eggs', items: [{name: 'Organic baked eggs with smoked salmon', price: '55'}, {name: 'Organic scrambled eggs', price: '45'}]},
        {name: 'Fruit', items: [{name: 'Banana with almondbutter and hempseeds', price: '35'}, {name: 'Organic Fruit Bowl', price: '40'}]}
      ],
      desserts: [
        {name: 'Cake', items: [{name: 'Gluten free brownie', price: '35'}, {name: 'Carrot Cake', price: '35'}]},
        {name: 'Muffins', items: [{name: 'Organic baked eggs with smoked salmon', price: '55'}, {name: 'Organic scrambled eggs', price: '45'}]},
        {name: 'Ice Cream', items: [{name: 'Mushroom toast with chestnuts', price: '55'}, {name: 'Toasted organic croissant', price: '40'}]},
        {name: 'Fruit', items: [{name: 'Banana with almondbutter and hempseeds', price: '35'}, {name: 'Organic Fruit Bowl', price: '40'}]}
      ]
    }
  }
}
</script>
