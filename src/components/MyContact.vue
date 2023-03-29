<template>
	<div class="contact  flex justify-center">
		<div class="contact-container ">

			<h1 v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="500" class="mb-8">Get In Touch</h1>
			<div v-motion :initial="{ opacity: 0, y: 10 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="700" class="text mb-11">

				<h4 class="text ">I’m very much open currently, to any opportunity. My inbox is always open. I’ll be sure to shoot a response as soon as I can, Thank You!</h4>
			</div>
			<a v-motion :initial="{ opacity: 0, y: 100 }" :visibleOnce="{ opacity: 1, y: 0 }" :delay="800" href="http://bnomba0704@gmail.com">
				<button class="button">Email Me</button>
			</a>
		</div>
	</div>
	<MyFooter id="contact"/>
</template>

<script>
import MyFooter from './MyFooter';

	export default{
		name: 'MyContact',
		components: {
			MyFooter,
		}
}
</script>

<style scoped>
.contact-container{
	width: 40%;
}
.contact{
 padding-top: 177px;
}
.button{
	border: 2px solid #66fcf1;
	padding: 15px 35px 15px 35px;
	border-radius: 5px;
	background: linear-gradient(to right, #2a7974 50%, #1f2833 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: all .5s ease-out;
	color: #66fcf1;
	font-family: 'Roboto Mono', monospace;
}
.button:hover{
	background-position: left bottom;
}
h1{
	color: #66fcf1;
	font-family: 'Ubuntu', sans-serif;
	font-size: 50px;
}
.text{
	color: #c5c6c7;
	font-family: 'Roboto Mono', monospace;
}
</style>