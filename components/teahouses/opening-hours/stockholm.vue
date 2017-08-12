<template>
  <div class="wrapper">
    <h2 class="hoursTitle" v-if="displayTitle">Stockholm</h2>
    <hours monday="10am-15pm" tuesday="10am-18pm" wednesday="10am-18pm" thursday="10am-17pm" friday="12am-20pm" sathurday="12am-21pm" sunday="Closed" />
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
