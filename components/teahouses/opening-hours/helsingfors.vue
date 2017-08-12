<template>
  <div class="wrapper">
    <h2 class="hoursTitle" v-if="displayTitle">Helsingfors</h2>
    <hours monday="10am-18pm" tuesday="10am-18pm" wednesday="10am-19pm" thursday="10am-19pm" friday="12am-21pm" sathurday="12am-21pm" sunday="Closed" />
  </div>
</template>

<script>
import Hours from '~components/teahouses/opening-hours/Hours'
export default {
  components: {
    Hours
  },
  props: {
    displayTitle: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

