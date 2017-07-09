<template>
  <div class="text">
    <h1 class="title"> Välj kommun </h1>
    <p>För att se vilka undantag som gäller i din kommun kan du välja din kommun nedan:</p>
    <!-- Municipalites är en komponent som listar alla kommuner man har lagt in, så att de visas i menyn -->
    <Municipalities />
    <p class="sideNote"> ( Har bara exempel med 3 kommuner eftersom detta är en prototyp )</p>
  </div>
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
.text .sideNote {
  font-size:0.8em;
}
</style>

