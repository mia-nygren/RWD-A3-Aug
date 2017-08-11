<template>
  <div class="footer">
    <footer>
      <div class="footerBase">
        <div class="textWrapper">
          <p class="copyright"> &copy; 2017  Tea2Go</p>
          <p class="contact">Contact: info@tea2go.com </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>

 .footerBase {
   width:100%;
   padding: 10px 20px;
   background-color: #F1EDE9;
   background-image: url('../assets/images/grunge-background-seamless.jpg');
   height:200px;
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
