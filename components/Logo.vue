<template>
	<div class="logo">
		<div class="logoContent">
			<div class="imgWrapper">
			<img src="~assets/images/logo.svg" alt="Logotyp">
			</div>
		</div>
	</div>
</template>

<style scoped>
.logo a {  
	color:#000;
}
.logo {
	position:relative;
	margin:0 auto;
	height:100%;
	margin-left:-35px;
}
.logo:before {
	content:'';
	display:block;
	padding-top:3em;
}
.logoContent {	
	position:absolute;
	top:0;
	right:0;
	left:0;
	bottom:0;
}
.imgWrapper {
	height:100%;
}
.logoContent img {
	height:90%;
	display:block;
	margin:0 auto;
}

@media(min-width:30em) {
  .logo:before {
	padding-top:5em;
	}
}
</style>
