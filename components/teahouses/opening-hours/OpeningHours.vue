<template>
<div class="openingHours">
    <h2 class="title centered borderBottom"> Opening Hours </h2>
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
  max-width:100%;
}

.openingHours h2 {
  padding: 1em;
  padding-bottom:.5em;
  margin-bottom:2em;
}

@media (min-width:65em) {
  .wrapper {
    margin: 20px;
    display: inline-block;
    width: 17em;
    box-shadow: 0 7px 7px rgba(0,0,0,0.12), 0 1px 8px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .wrapper:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 22px rgba(0,0,0,0.22);
  }
}
</style>
