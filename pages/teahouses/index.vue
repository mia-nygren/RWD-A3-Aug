<template>
  <div class="mainContent">
  <div class="text">
    <h1 class="title"> Our Tea Houses </h1>
      <p>
      Our restaurants / tehouses serves fairtrade and organic food. 
      You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just a cup of tea. 
      Which is excellent on it's own of course!
       </p>
    <p>We currently have three Tea Houses in Scandinavia:</p> 
  </div>
  <!-- TeaHouses är en komponent som listar alla tehus man har lagt in, så att de visas i menyn -->
  <TeaHouses />
  </div>
</template>

<script>
import TeaHouses from '~components/teahouses/TeaHouses'

export default {
  components: {
    TeaHouses
  }
}
</script>
<style>

</style>
