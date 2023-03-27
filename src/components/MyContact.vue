<template>
	<div class="contact h-screen flex justify-center">
		<div class="contact-container">

			<h1>Get In Touch</h1>
			<p>I’m very much open currently, for any opportunity. My inbox is always open. I’ll be sure to shoot a response as soon as I can, Thank You!</p>
			<a href="http://bnomba0704@gmail.com">
				<button>Email Me</button>
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
	margin-top: 20%;
	width: 40%;
}
.contact{
 margin-top: 15%;
}
</style>