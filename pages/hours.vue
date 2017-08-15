<template>
  <div class="mainContent">
    <opening-hours :display-title="true" />
  </div>
</template>

<script>
import OpeningHours from '~components/teahouses/opening-hours/OpeningHours'
// Här definerar jag titel och text som ska vara i headerimage
let title = 'Have a cup of tea that makes a difference!'
let text = 'We make sure that all our tea is fair trade. We also have organic and healthy food - all at a fair price!'
let headerImageFileName = 'index'

export default {
  components: {
    OpeningHours
  },
  head () {
    return {
      title: 'tea2go - Opening Hours'
    }
  },
  fetch ({store}) {
    store.commit('changeHeaderTitle', title)
    store.commit('changeHeaderText', text)
    store.dispatch('changeHeaderImageFileName', headerImageFileName)
  }
}
</script>
