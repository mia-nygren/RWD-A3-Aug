<template>
  <div class="text">
    <h1 class="title centered"> {{ getTitle }}</h1>
    <p> Welcome to our tea house in {{ getTitle }}. Our goal is to only serve fairtrade and organic food. 
    And we are well on our way! The items on our menu is a healthy choice for everyone.
    <p>Every day our staff bake bread that is ready for breakfast. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Vivamus eget imperdiet arcu.</p>
    
    <Menu :drinks="drinks" :brunch="brunch" :breakfast="breakfast" currency="&#x20AC;"/>

    <featured-menu-item :item="{name: 'Blueberry Muffin', price: '2.5'}" price="1.5" month="August" fileName="carrotcake" currency="&#x20AC;"/>
   
    <h3> Vegan food and/or allergies?</h3>
    <p>Don't worry, we have plenty of options, just ask! </p>
      
    <h1 id="contact" name="contact">Contact us </h1>
    <p>Contact information here</p>
    
    <h2 id="hours">Opening Hours </h2>
    <hours />

    <br />
    <h1 id="address" name="address">Find us </h1>
    <p> Address: <a href="https://www.google.se/maps/place/Helsingfors,+Finland" target="-blank">{{title}}</a>  ... </p>
    <google-maps class="jsOnly" infoText="Tea2go in Helsingfors" :coordinates="{lat: 60.177772, lng: 24.934338}" />
  </div>
</template>

<script>
import Hours from '~components/teahouses/opening-hours/helsingfors'
import Menu from '~components/teahouses/Menu'
import FeaturedMenuItem from '~components/teahouses/FeaturedMenuItem'
import GoogleMaps from '~components/teahouses/GoogleMap'

let title = 'Helsingfors'

export default {
  layout: 'teahouse',
  components: {
    Hours,
    Menu,
    FeaturedMenuItem,
    GoogleMaps
  },
  fetch ({ store, params }) {  // Fetch is called before the component renders, and can make changes to the store
    store.dispatch('resetHeaderTextandTitle') // I'm resetting since I don't want any text only an image
    store.dispatch('changeHeaderImageFileName', title) // Change the header image file name
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
        {name: 'tea', items: [{name: 'Earl Grey', price: '2.5'}, {name: 'Green tea', price: '2.5'}, {name: 'Oolong', price: '2.5'}, {name: 'White tea', price: '2.5'}, {name: 'Yellow tea', price: '2.5'}]},
        {name: 'juice', items: [{name: 'Orange', price: '4'}, {name: 'Apple, carrot and ginger', price: '4.5'}]}
      ],
      brunch: [
        {name: 'Sallads', items: [{name: 'Beetroot and goat cheese', price: '9'}, {name: 'Salmon and quinoa', price: '9'}]},
        {name: 'Toast', items: [{name: 'Avocado and chillitoast', price: '6'}]}
      ],
      breakfast: [
        {name: 'Bread/Toast', items: [{name: 'Mushroom toast with chestnuts', price: '6'}, {name: 'Toasted organic croissant', price: '4'}]},
        {name: 'Porrige', items: [{name: 'Gluten free organic porridge', price: '4'}, {name: 'Salmon and quinoa', price: '9'}]},
        {name: 'Eggs', items: [{name: 'Organic baked eggs with smoked salmon', price: '6'}, {name: 'Organic scrambled eggs', price: '4.5'}]},
        {name: 'Fruit', items: [{name: 'Banana with almondbutter and hempseeds', price: '4'}, {name: 'Organic Fruit Bowl', price: '4'}]}
      ],
      desserts: [
        {name: 'Cake', items: [{name: 'Gluten free brownie', price: '4'}, {name: 'Carrot Cake', price: '4'}]},
        {name: 'Muffins', items: [{name: 'Organic baked eggs with smoked salmon', price: '6'}, {name: 'Organic scrambled eggs', price: '4.5'}]},
        {name: 'Ice Cream', items: [{name: 'Mushroom toast with chestnuts', price: '6'}, {name: 'Toasted organic croissant', price: '4'}]},
        {name: 'Fruit', items: [{name: 'Banana with almondbutter and hempseeds', price: '4'}, {name: 'Organic Fruit Bowl', price: '4'}]}
      ]
    }
  }
}
</script>

