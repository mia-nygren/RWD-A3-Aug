<template>
    <div class="nav" aria-label="Main Menu">
      <nav>
        <!-- v-on-clickaway används för att se om användaren har klickat utanför menyn, då stängs menyn (javascript only) 
        v-on-clickaway anropar funktionen hideMenu som ändrar checkboxens status -->
        <div v-on-clickaway="hideMenu">
          <label id="menuButton" for="nav-trigger">&#8801;</label> <!-- https://stackoverflow.com/a/32081526/4178864 -->
          <input type="checkbox" id="nav-trigger" class="nav-trigger" v-model="checked" />
          <ul class="navigation">
            <!-- nuxt-link används för att navigera i applikationen, och den ger också en active klass för den länk som hör samman med sidan man är på -->
            <li v-on:click="hideMenu" class="home">
              <nuxt-link to="/" exact >Home</nuxt-link>
            </li>
            <li v-on:click="hideMenu" class="teaVariaties">
              <nuxt-link to="/tea">Tea Variaties</nuxt-link>
            </li>
            <li v-on:click="hideMenu" class="teaHouses">
             <nuxt-link to="/teahouses">Tea Houses</nuxt-link>
            </li>
             <li v-on:click="hideMenu" class="openingHours">
              <nuxt-link to="/hours">Opening hours</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>
<script>
  import { directive as onClickaway } from 'vue-clickaway'
  export default {
    data () {
      return {
        menuButton: null,
        mainNavigation: null,
        checked: false,
        isOpen: false
      }
    },
    methods: {
      toggleMenu () {
        console.log(this.isOpen)
        console.log('clicked the menubtn')
      },
      hideMenu () {
        console.log('clicked OUTSIDE OF MENU or on menuButton !')
        this.checked = false
      }
    },
    directives: {
      onClickaway
    }
  }

</script>

<style scoped>
  .navigation {
    height: 200px;
    width: 14em;
    background:#FFF;
    list-style-type: none;
    z-index: 99;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 2px 6px rgba(0, 0, 0, 0.23);
    position: absolute;
    top:50px;
    left:-15em;
    z-index:999;
  }

  .navigation a {
    color:#5A5651;
  }
  .navigation a:hover {
    background-color: #F1EDE9;
  }
  
  .navigation .nuxt-link-active, .navigation .nuxt-link-exact-active {
    color: #FFF;
    background-color: #7d8066;
    font-weight: 700;
  }
  
  .navigation .nuxt-link-active:hover {
    background: #7d8066;
  }
  .navigation li {
    height:50px;
  }
  .navigation li a {
    height:100%;
    line-height:50px;
    display: block;
    padding-left:1.5em;

  } 
  .nav-trigger {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  /* -- Menyknapp ( Hamburgermenu )--*/ 
  #menuButton {
    color:#5A5651;
    width:55px;
    height:50px;
    position: relative;
    display:block;
    float:left;
    text-align: center;
    text-transform: uppercase;
    line-height:50px;
    font-size: 2.1em;
    z-index: 999;
    cursor: pointer;
    /* Strechar ut ikonen lite  - Progressive Enhancement -   https://stackoverflow.com/a/15262227/4178864 */ 
    -webkit-transform:scale(1.4, 1.0);
    -moz-transform:scale(1.4, 1.0);
    -ms-transform:scale(1.4, 1.0);
    -o-transform:scale(1.4, 1.0);
    transform:scale(1.4, 1.0);
  }
  .nav-trigger + label,
  .navigation, .navBackground {
    transition: left 0.2s;
  }
  
  .nav-trigger:checked ~ .navigation {
    display: block;
    left:0;
  }
  @media(min-width:55em) {
     #menuButton, .nav-trigger, .navBackground {
       display:none;
     }
    .navigation {
      box-sizing:initial;
      padding:0;
      width: 33em;
      height: 50px;
      position:inherit;
      box-shadow:none;
    }
    .nav li a {
      padding:0;
    }

    /* defining a width for the menu items */ 
    .nav .home {
      width:5em;
    }
    .nav .teaHouses , .teaVariaties{
      width:9em;
    }

    .nav .openingHours {
      width:10em;
    }
    .nav ul {
      text-align: center;
    }
    .nav ul li {
      margin:0; 
      float:left;
    }
  }
</style>
