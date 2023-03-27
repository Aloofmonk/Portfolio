<template>
	<NavBar/>
	<div class="home flex justify-center pt-14 h-screen">

		<div class="home-container text-left p-9 pt-9">

			<p class="mb-4">Hi , my name is</p>
			<h1 class="text-6xl font-bold mb-4">BENJAMIN NOMBA.</h1>
			<h1 class="text-6xl font-bold mb-7">I build things web related.</h1>
			<p class="mb-12 w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, exercitationem ipsam ad cum ducimus dolorem nesciunt distinctio, minus beatae eos impedit, eum reprehenderit nemo aperiam facere consequatur quam! Neque, reiciendis?</p>

			<button class="button">Check out my Resume</button>
			
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