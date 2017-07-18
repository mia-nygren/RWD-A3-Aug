<template>
  <div class="text">
    <h1 class="title"> Our Tea Houses </h1>
    <p>We currently have three Tea Houses in Scandinavia:</p>
    <p> Choose a Tea House you want to visit </p>
    <p> We are a company that cares about tea and the environment.
      Currently we have three teahouses placed in Skandinavia.
      </p>
      <p>
      Our restaurants / tehouses serves fairtrade and organic food. 
      You can choose between a vast selection of quality organic and fairtraide tea to have with your meal, or just a cup of tea. 
      Which is excellent on it's on of course!
       </p>
       
    <!-- Municipalites är en komponent som listar alla kommuner man har lagt in, så att de visas i menyn -->
    <Municipalities />
  </div>
</template>

<script>
import Municipalities from '~components/municipalities/Municipalities'

export default {
  components: {
    Municipalities
  }
}
</script>
<style>

</style>

