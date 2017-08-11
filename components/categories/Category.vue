<template>
    <div class="text">
        <h1> {{ name }} </h1>
        <p> Information om {{ name }} här + bild </p>
        <div class="categoryIMG"> 
        </div>
        <p class="notComplete"> Detta är en prototypsida, som jag inte har hunnit att styla,
          men som jag har tänkt mig ska innehålla bild och information om det valda teet.</p>
            </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style>

.notComplete {
  color:grey;
}

</style>

