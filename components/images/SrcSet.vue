<template>
<img v-bind:src="getImageSrc(medium, fileName, fileEnding)" 
        v-bind:srcset="getImageSrc(small, fileName, fileEnding) + ' 350w' + ',' + getImageSrc(medium, fileName , fileEnding) + 
        ' 600w' + ',' + getImageSrc(large, fileName, fileEnding) + ' 850w' + ',' + getImageSrc(large +'-hd', fileName, fileEnding) + ' 1300w'" :sizes="sizes" :alt="alt" /> 
</template>

<script>
import {small, medium, large} from '~assets/js/shared.js'

export default {
  props: {
    fileName: {
      type: String,
      required: true
    },
    fileEnding: {
      type: String,
      required: false,
      default: '.jpg'
    },
    getImageSrc: {
      type: Function,
      required: true
    },
    sizes: {
      type: String,
      required: false,
      default: '(max-width: 40em) 100vw, 60vw'
    },
    alt: {
      type: String,
      reguired: true
    }
  },
  data () {
    return {
      small,
      medium,
      large
    }
  }
}
</script>
