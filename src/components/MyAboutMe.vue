<template>
	<div id="about" class="About flex h-screen justify-center items-center gap-12">
		<div class="about-me w-96 text-left">
			<h1>About</h1>
			<p>

				Hello! My name is Benjamin and I enjoy creating things that live on the internet. My interest in web development and engineering started back in 2018 when I started my computer science major — I started with the basics and soon after I knew a lot about HTML & CSS!
	
				Fast-forward to today, and I’ve had the privilege of attending Alt-School Africa. A Pan-African Technology School and a huge organisation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of users.
	
				I also Do Technical writting and I like to learn various technologies at my spare time which will help me build better web applictions.
			</p>
		</div>

		<div class="image w-72 ">
			<img class=" img " src="../images/IMG_20200807_160444_1.jpg" alt="pic">
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
	border: 2px solid #66fcf1;
	border-radius: 6px;
}
.img{
	border-radius: 6px;
	position: relative;
	filter: grayscale(100%);
	left: 15px;
	bottom: 10px;
	transition:all 0.5s ;
	transition-delay: 0.4s;
}
.img:hover{
	position: relative;
	filter: grayscale(0%);
	left: 10px;
	transition: all 0.5s ;
	transition-delay: 0.3s ;
}
h1{
	color: #66fcf1;
}
p{
	color: #c5c6c7;
}

</style>