<template>
  <div>
    <h2>Helsingfors</h2>
    <hours monday="10am-18pm" tuesday="10am-18pm" wednesday="10am-19pm" thursday="10am-19pm" friday="12am-21pm" sathurday="12am-21pm" sunday="Closed" />
    </div>
</template>

<script>
import Hours from '~components/teahouses/opening-hours/Hours'
export default {
  components: {
    Hours
  }
}
</script>
