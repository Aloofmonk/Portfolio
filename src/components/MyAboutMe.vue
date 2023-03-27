<template>
	<div id="about" class="About flex h-screen justify-center items-center gap-12">
		<div class="about-me w-96 text-left">
			<h1>About</h1>
			Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

			Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

			I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.

			Here are a few technologies I’ve been working with recently
		</div>

		<div class="image w-72 rounded-full">
			<img class=" img rounded-full" src="../images/IMG_20200807_160444_1.jpg" alt="pic">
		</div>
	</div>
</template>

<script>
	export default{
		name: 'MyAboutMe'
	}
</script>

<style scoped>
.image{
	border: 2px solid black;
}
.img{
	position: relative;
	filter: grayscale(100%);
	left: 10px;
	transition:all 0.5s ;
	transition-delay: 0.4s;
}
.img:hover{
	position: relative;
	filter: grayscale(0%);
	left: 0;
	transition: all 0.5s ;
	transition-delay: 0.3s ;
}


</style>