<template>
  <dl style="width:100%">
    <dt>{{weekdays.monday}}</dt>
    <dd>{{monday}}</dd>
  
    <dt>{{weekdays.tuesday}}</dt>
    <dd>{{tuesday}}</dd>
  
    <dt>{{weekdays.wednesday}}</dt>
    <dd>{{wednesday}}</dd>
  
    <dt>{{weekdays.thursday}}</dt>
    <dd>{{thursday}}</dd>
  
    <dt>{{weekdays.friday}}</dt>
    <dd>{{friday}}</dd>
  
    <dt>{{weekdays.sathurday}}</dt>
    <dd>{{sathurday}}</dd>
  
    <dt>{{weekdays.sunday}}</dt>
    <dd>{{sunday}}</dd>
  </dl>
</template>

<script>
import _ from 'lodash'

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
  },
  data () {
    return {
      weekdays: {monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday', thursday: 'Thursday', friday: 'Friday', sathurday: 'Sathurday', sunday: 'Sunday'}
    }
  },
  methods: {
    capitalize (text) {
      return _.capitalize(text)
    }
  }
}
</script>

<style scoped>
/* CSS utifrån exemplet: Formating a data list http://www.the-art-of-web.com/css/format-dl/ */ 
 dl {
   padding:1em 0;
    max-width:250px;
  }
  dd, dt {
  padding:1em;
  border-bottom:1px solid #000
  }
  dt {
    font-weight: 600;
    float: left;
    clear: left;
    width: 100px;
    font-weight: bold;
    color: green;
    ;
  }
  dt:after {
    content: ":";
  }
  dd {
    text-align: right;
  }
</style>
