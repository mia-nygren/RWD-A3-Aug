<template>
  <div class="mainContent">
    <opening-hours :display-title="true" />
      <h3 class="centered"> Welcome! </h3>
  </div>
</template>

<script>
import OpeningHours from '~components/teahouses/opening-hours/OpeningHours'

export default {
  components: {
    OpeningHours
  }
}
</script>
<style>

</style>
