<template>
<div class="openingHours">
    <h2 class="centered "> Opening Hours </h2>
    <helsingfors :display-title="displayTitle" />
    <stockholm :display-title="displayTitle" />
    <oslo :display-title="displayTitle" />
</div>
</template>

<script>
import helsingfors from '~components/teahouses/opening-hours/helsingfors'
import stockholm from '~components/teahouses/opening-hours/stockholm'
import oslo from '~components/teahouses/opening-hours/oslo'

export default {
  props: {
    displayTitle: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: {
    helsingfors,
    oslo,
    stockholm
  }
}
</script>

<style scoped lang="scss">
@import '~assets/styles/colors.scss';

.openingHours {
  margin: 0 auto;
  text-align: center;
  margin-bottom:20px;
}

.wrapper {
  margin: 0 auto;
  padding: 2em;
  width: 30em;
}

.openingHours h2 {
  padding: 1.4em;
}

@media (min-width:65em) {
  .wrapper {
    margin: 20px;
    display: inline-block;
    width: 17em;
    border: 3px solid #C7BAAD;
    background-color: $light-grey;
  }
}
</style>
