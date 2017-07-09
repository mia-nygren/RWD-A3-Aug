<template>
  <div class="footer">
    <footer>
      <div class="grass" aria-hidden="true"></div>
      <div class="footerBase">
        <div class="textWrapper">
          <p class="copyright"> &copy; 2017 - Sorteringsguiden.</p>
          <p class="contact">Kontakt: xxxx@sorteringsguiden.com </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
.grass {
     background-image: url('../assets/images/grass.png');
     height:90px;
     margin-top:-15px; 
 }
 .footerBase {
   width:100%;
   padding: 10px 20px;
   background-color: #FFF;
   height:80px;
   border-top:5px solid #6fa9a2;
 }
 .footerBase p {
   display:block;
 }
 .copyright {
   font-family: sans-serif;
 }

 @media(min-width:33em){
   .textWrapper {
     margin:0 auto;
     position:relative;
     max-width:33em;
   }
   .footerBase {
     text-align: left;
   }
   .footerBase p {
   display:inline;
  }
   .contact {
     position:absolute;
     top:0;
     right:0;  
  }
  .copyright {
    position:absolute;
    top:0;
    left:0;  
  }
 }
</style>
