<template>
    <div class="text">
      <h1 class="title"> get name of page?</h1>
        <hours monday="10am-18pm" tuesday="10am-18pm" wednesday="10am-19pm" thursday="10am-19pm" friday="12am-21pm" sathurday="12am-21pm" sunday="Closed" />
         ...maybe shoudl've had a teahouse component with title and main image?!
    </div>
</template>

<script>
import Hours from '~components/teahouses/Hours'
export default {
  layout: 'teahouse',
  components: {
    Hours
  }
}
</script>
