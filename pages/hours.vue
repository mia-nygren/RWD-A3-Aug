<template>
  <div class="mainContent">
    <opening-hours :display-title="true" />
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

