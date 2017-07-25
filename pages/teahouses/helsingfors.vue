<template>
    <div class="text">
      <h1 class="title"> {{name}}</h1>
      <div class="imgWrapper">
      <img src="~assets/images/teahouses/large/helsingfors.jpg" /> <!-- have this large as HEADERIMAGE instead! -->
      </div>
      <h1 id="hours">Hours </h1>
        <p>Contact information here</p>
        <hours monday="10am-18pm" tuesday="10am-18pm" wednesday="10am-19pm" thursday="10am-19pm" friday="12am-21pm" sathurday="12am-21pm" sunday="Closed" />
         ...maybe shoudl've had a teahouse component with title and main image?!

        <h1 id="menu" name="menu" >Menu here</h1>
        <p>menu tabel....
          Minim aperiam consulatu vim at, ea
           elit veri meis pri. Ut vis purto affert dolorum, te vel magna
            graeci copiosae, pro et aliquip argumentum disputationi.
             Eu est labores perfecto, vis cu congue accusamus. 
             Copiosae accusamus adolescens usu id, everti sadipscing ut pri. Et lobortis conclusionemque vis. 
             Fabellas insolens vim no, has augue virtute ne.
               Minim aperiam consulatu vim at, ea
           elit veri meis pri. Ut vis purto affert dolorum, te vel magna
            graeci copiosae, pro et aliquip argumentum disputationi.
             Eu est labores perfecto, vis cu congue accusamus. 
             Copiosae accusamus adolescens usu id, everti sadipscing ut pri. Et lobortis conclusionemque vis. 
             Fabellas insolens vim no, has augue virtute ne.
               Minim aperiam consulatu vim at, ea
           elit veri meis pri. Ut vis purto affert dolorum, te vel magna
            graeci copiosae, pro et aliquip argumentum disputationi.
             Eu est labores perfecto, vis cu congue accusamus. 
             Copiosae accusamus adolescens usu id, everti sadipscing ut pri. Et lobortis conclusionemque vis. 
             Fabellas insolens vim no, has augue virtute ne.
               Minim aperiam consulatu vim at, ea
           elit veri meis pri. Ut vis purto affert dolorum, te vel magna
            graeci copiosae, pro et aliquip argumentum disputationi.
             Eu est labores perfecto, vis cu congue accusamus. 
             Copiosae accusamus adolescens usu id, everti sadipscing ut pri. Et lobortis conclusionemque vis. 
             Fabellas insolens vim no, has augue virtute ne.
               Minim aperiam consulatu vim at, ea
           elit veri meis pri. Ut vis purto affert dolorum, te vel magna
            graeci copiosae, pro et aliquip argumentum disputationi.
             Eu est labores perfecto, vis cu congue accusamus. 
             Copiosae accusamus adolescens usu id, everti sadipscing ut pri. Et lobortis conclusionemque vis. 
             Fabellas insolens vim no, has augue virtute ne.
        </p>
        <h1 id="contact" name="contact" >Contact us </h1>
        <p>Contact information here</p>
    </div>
</template>

<script>
import Hours from '~components/teahouses/Hours'
export default {
  layout: 'teahouse',
  components: {
    Hours
  },
  data () {
    return {
      name: 'Helsingfors'
    }
  }
}
</script>
<style scoped>
.imgWrapper img{
  width:100%;
}
.imgWrapper {
  width:100%;
}
</style>
