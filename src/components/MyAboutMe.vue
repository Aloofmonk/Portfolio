<template>
	<div  id="about" class="About " >
		<h1 v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="500"> <span>01.</span> About</h1>
		<div class="wrap flex flex justify-center items-center gap-12">

			<div class="about-me w-2/5 text-left" >
				<p v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="900">
					Hello! My name is Benjamin and I enjoy creating things that live on the interweb. My interest in web development and engineering began back in 2018 when I started my computer science major — I arrived at the basics and soon after I knew a lot about HTML & CSS!
					<br>
					<br>
					Fast-forward to today, and I’ve had the privilege of attending A Pan-African Technology School and a huge organisation, to Curate indepth Knowledge in my specialization. My main focus these days is building accessible, inclusive products and digital experiences for a variety of users.
					<br>
					<br>
					I also Do a bit of Technical writting and I like to learn various technologies in my spare time, which help me build better web applictions.
				</p>
			</div>
	
			<div v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="700" class="image w-72 ">
				<img v-motion :initial="{ opacity: 0, x: 50 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="750" class=" img " src="../images/IMG_20200807_160444_1.jpg" alt="pic">
			</div>
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
.About{
	margin-bottom: 60px;
	padding-top: 100px;
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
	margin-bottom: 40px;
	padding-right: 710px;
}
p{
	color: #c5c6c7;
	font-family: 'Roboto Mono', monospace;
}

@media only screen and (max-width: 500px) {
.about-me{
	width: 100%;
	padding-left: 30px;
	padding-right: 20px;
}
.wrap{
	flex-direction: column;
	flex-direction: column-reverse;
}
.About{
margin-bottom: 60px;
padding-top: 50px;
}
.img{
width: 100%;
border-radius: 6px;
position: relative;
filter: grayscale(100%);
margin-bottom: 5px;
}
.image{
	margin-bottom: 25px;
}
.img:hover{
position: relative;
filter: grayscale(0%);
}
h1{
color: #66fcf1;
font-family: 'Ubuntu', sans-serif;
font-size: 25px;
margin-bottom: 30px;
padding-right: 10px;
}
p{
color: #c5c6c7;
font-family: 'Roboto Mono', monospace;
font-size: 14px;
}
.img{
	border-radius: 6px;
	position: relative;
	filter: grayscale(0%);
	left: 10px;
	bottom: 5px;
}
}
</style>