<template>
  <div class="mainContent">
    <opening-hours :display-title="true" />
  </div>
</template>

<script>
import OpeningHours from '~components/teahouses/opening-hours/OpeningHours'
// Här definerar jag titel och text som ska vara i headerimage på startsidan
let title = 'Visit our tea houses!'
let text = 'We are opened all year 7 days a week'
let headerImageFileName = 'index'

export default {
  components: {
    OpeningHours
  },
  fetch ({store}) {
    store.commit('changeHeaderTitle', title)
    store.commit('changeHeaderText', text)
    store.dispatch('changeHeaderImageFileName', headerImageFileName)
  }
}
</script>

