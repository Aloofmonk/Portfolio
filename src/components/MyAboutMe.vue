<template>
	<div  id="about" class="About flex h-screen justify-center items-center gap-12" >
		<div class="about-me w-2/5 text-left" >
			<h1 v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="500"> <span>01.</span> About</h1>
			<p v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="700">
				Hello! My name is Benjamin and I enjoy creating things that live on the internet. My interest in web development and engineering started back in 2018 when I started my computer science major — I started with the basics and soon after I knew a lot about HTML & CSS!
				<br>
				<br>
				Fast-forward to today, and I’ve had the privilege of attending Alt-School Africa. A Pan-African Technology School and a huge organisation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of users.
				<br>
				<br>
				I also Do Technical writting and I like to learn various technologies in my spare time, which will help me build better web applictions.
			</p>
		</div>

		<div v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="700" class="image w-72 ">
			<img v-motion :initial="{ opacity: 0, x: 50 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="750" class=" img " src="../images/IMG_20200807_160444_1.jpg" alt="pic">
		</div>
	</div>
</template>

<script>


	export default{
		name: 'MyAboutMe'
	}
</script>

<style scoped>
span{
	font-family: 'Roboto Mono', monospace;
}
.about-me{
	/* padding-bottom: 90px; */
}
.image{
	border: 2px solid #66fcf1;
	border-radius: 6px;
}
.img{
	border-radius: 6px;
	position: relative;
	filter: grayscale(100%);
	left: 15px;
	bottom: 10px;
	transition:all 0.15s ;
}
.img:hover{
	position: relative;
	filter: grayscale(0%);
	left: 10px;
	transition: all 0.15s ;
}
.image:hover{
	background: #14504d;
}
h1{
	color: #66fcf1;
	font-family: 'Ubuntu', sans-serif;
	font-size: 35px;
}
p{
	color: #c5c6c7;
	font-family: 'Roboto Mono', monospace;
}

</style>