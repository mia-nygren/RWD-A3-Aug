<template>
  <div class="hours">
    <p>Monday: {{monday}}</p>
    <p>Tuesday: {{tuesday}}</p>
    <p>Wednesday: {{wednesday}}</p>
    <p>Thursday: {{thursday}}</p>
    <p>Friday: {{friday}}</p>
    <p>Sathurday: {{sathurday}}</p>
    <p>Sunday: {{sunday}}</p>
    </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    monday: {
      type: String,
      required: true
    },
    tuesday: {
      type: String,
      required: true
    },
    wednesday: {
      type: String,
      required: true
    },
    thursday: {
      type: String,
      required: true
    },
    friday: {
      type: String,
      required: true
    },
    sathurday: {
      type: String,
      required: true
    },
    sunday: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.hours p {
  margin:0;
}
</style>
