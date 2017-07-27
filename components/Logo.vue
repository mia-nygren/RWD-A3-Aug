<template>
	<div class="logo">
		<div class="logoContent">
			<div class="imgWrapper">
			<img src="~assets/images/logo2.png" alt="Logotyp">
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
}
.logo:before {
	content:'';
	display:block;
	padding-top:100%;
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
</style>
