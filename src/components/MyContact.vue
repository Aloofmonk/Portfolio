<template>
	<div class="contact h-screen flex justify-center">
		<div class="contact-container">

			<h1>Get In Touch</h1>
			<p>I’m very much open currently, to looking for any new opportunities, my inbox is always open. I’ll be sure to shoota response as soon as I can, Thank You!</p>
			<button>Email Me</button>
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