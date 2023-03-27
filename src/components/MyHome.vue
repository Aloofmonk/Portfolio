<template>
	<NavBar/>
	<div class="home flex justify-center pt-14 h-screen">

		<div class="home-container text-left p-9 pt-9">

			<p class="mb-4">Hi , my name is</p>
			<h1 class="text-6xl font-bold mb-4">BENJAMIN NOMBA.</h1>
			<h1 class="text-6xl font-bold mb-7">I build things web related.</h1>
			<p class="mb-12 w-2/4">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, My focus has always been on building accessible, human-centered products and Curating indepth Knowledge in my field of specialization along the way.</p>

			<a href="https://drive.google.com/file/d/1oHiAa40omJBT40nmi8ZFMJSSCIGGFrU5/view">

				<button class="button">Check out my Resume</button>
			</a>
			
		</div>
	</div>
</template>

<script>
import NavBar from './NavBar.vue';

export default{
	name: 'MyHome',
	components:{
		NavBar,
	}
}
</script>

<style>
.home-container{
	/* border: 2px solid black; */
	width: 75%;
	max-height: 100%;
	box-sizing: border-box;
}
.button{
	border: 2px solid black;
	padding: 20px;
	border-radius: 5px;
}
</style>