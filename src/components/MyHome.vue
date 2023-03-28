<template>
	
	<div id="home" class="home flex justify-center pt-14 h-screen">

		<div class="home-container text-left p-9 pt-9">

			<p class="p-2 mb-4">Hi, my name is</p>
			<h1 class="text-6xl font-bold mb-4">BENJAMIN NOMBA.</h1>
			<h1 class="h1-2 text-6xl font-bold mb-7">I build things web related.</h1>
			<p class="mb-12 w-2/4">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, My focus has always been on building accessible, human-centered products and Curating indepth Knowledge in my field of specialization along the way.</p>

			<a href="https://drive.google.com/file/d/1oHiAa40omJBT40nmi8ZFMJSSCIGGFrU5/view">
				<button class="button">Check out my Resume</button>
			</a>
			
		</div>
	</div>
</template>

<script>


export default{
	name: 'MyHome',
	components:{
		
	}
}
</script>

<style scoped>
.home-container{
	/* border: 2px solid black; */
	width: 75%;
	height: 100%;
	box-sizing: border-box;
}
.button{
	border: 2px solid #66fcf1;
	padding: 20px;
	font-family: 'Roboto Mono', monospace;
	border-radius: 5px;
	background: linear-gradient(to right, #2a7974 50%, #1f2833 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: all .5s ease-out;
	color:#66fcf1;
}
.button:hover{
	background-position: left bottom;
}
p{
	color: #c5c6c7;
	font-family: 'Roboto Mono', monospace;
}
.p-2{
	color: #e2e8ef;
}
h1{
	color: #66fcf1;
	font-family: 'Ubuntu', sans-serif;
}
.h1-2{
	color: #45A29E;
}

</style>