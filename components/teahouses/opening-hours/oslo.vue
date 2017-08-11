<template>
  <div>
    <h2 v-if="displayTitle">Oslo</h2>
    <hours monday="10am-17pm" tuesday="10am-17pm" wednesday="10am-17pm" thursday="10am-19pm" friday="12am-22pm" sathurday="12am-19pm" sunday="12am-17pm" />
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
