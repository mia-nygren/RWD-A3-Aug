<template>
		<div class="logo">
		<img src="~assets/images/logo2.png" alt="Logotyp">
		<div class="logoText">
			<h1>
				Tea2Go
			</h1>
		</div>
	</div>
</template>

<style>
.logo a {  
	color:#000;
}

.logo {
	position: absolute;
	top:100px;
	left:100%;
	width:120px;
	padding-top:12px;
	height:50px;
	margin-left:-120px;
	border-collapse:initial;
	border:1px solid #7d8066;
	background-image:url("~assets/images/lighten.png");
}
.logo img {
	width:100%;
	display:block;
	margin:0 auto;
}
.logoText{
	padding-left:110%;
	overflow:hidden;
	width:11em;
	margin:0 auto;
}
.logoText h1 {
	font-size: 1em; 
	font-weight: 700;
	color:#000;
	line-height:50px;
}
@media(min-width:900px){
	.logo {
		width:200px;
		padding:12px;
		height:80px;
		left:50%;
	}
}
</style>
