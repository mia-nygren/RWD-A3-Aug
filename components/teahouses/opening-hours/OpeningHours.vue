<template>
<div>
    <h2> Opening Hours </h2>
    <helsingfors :display-title="true" />
    <stockholm :display-title="true" />
    <oslo :display-title="true" />
</div>
</template>

<script>
import helsingfors from '~components/teahouses/opening-hours/helsingfors'
import stockholm from '~components/teahouses/opening-hours/stockholm'
import oslo from '~components/teahouses/opening-hours/oslo'

export default {
  components: {
    helsingfors,
    oslo,
    stockholm
  }
}
</script>

<style scoped>
.wrapper {
  padding:2em;
  display:inline-block;
  width:17em;
  border:1px solid #C7BAAD;
}
</style>
