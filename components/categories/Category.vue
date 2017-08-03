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
 .card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  width: 98%;
  height:30em;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
 }

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.notComplete {
  color:red;
}

@media (min-width:30em) {
    .card {
        width:30em;
    }
}

</style>

