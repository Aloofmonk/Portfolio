<template>
		<div id="technologies" class="tech-container ">

			<div class="title">
				<h1 v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="500" >Technologies</h1>
				<p v-motion :initial="{ opacity: 0, }" :visibleOnce="{ opacity: 1, }" :delay="700">Here are a few technologies I’ve been working with recently:</p>
			</div>
			<div class="tech-flex">
				<div v-motion :initial="{ opacity: 0, x:-300 }" :visibleOnce="{ opacity: 1, x:0 }" :delay="900" class="wrapper-flex">

					<div class="wrapper">
						<img src="../images/html.png" alt="" width="100px" class=" icon ">
						<div class="hshow"><h3>HTML</h3></div>
					</div>
					<div class="wrapper">
						<img src="../images/css-3.png" alt="" width="100px" class=" icon ">
						<div class="hshow"><h3>CSS</h3></div>
					</div>
					<div class="wrapper">
						<img src="../images/js.png" alt="" width="100px" class=" icon ">
						<div class="hshow"><h3>JavaScript</h3></div>
					</div>
					<div  class="wrapper">
						<img src="../images/vue.png" alt="" width="100px" class=" icon">
						<div class="hshow"><h3>VUE</h3></div>
					</div>
				</div>
				<div v-motion :initial="{ opacity: 0, x: 300 }" :visibleOnce="{ opacity: 1, x: 0 }" :delay="1100" class="wrapper-flex-2">

					<div class="wrapper">
						<img src="../images/physics.png" alt="" width="100px" class=" icon">
						<div class="hshow"><h3>REACT</h3></div>
					</div>
					<div class="wrapper">
						<img src="../images/tail.png" alt="" width="110px" class=" icon">
						<div class="hshow"><h3>TailWind</h3></div>
					</div>
					<div class="wrapper">
						<img src="../images/firebase.png" alt="" width="100px" class=" icon ">
						<div class="hshow"><h3>FireBase</h3></div>
					</div>
					<div class="wrapper">
						<img src="../images/githubhub.png" alt=""  width="100px" class=" icon-pop">
						<div class="hshow"><h3>GitHub</h3></div>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
	export default{
		name: 'MyTechnologies',
	}
</script>

<style scoped>

.tech-flex{
	display: flex;
	flex-direction: column;
}
.tech-container{
	padding-top: 100px;
}
.wrapper-flex{
	display: flex;
	justify-content: center;
	column-gap: 100px;
	margin-bottom: 100px;
}
.wrapper-flex-2{
	display: flex;
	justify-content: center;
	column-gap: 100px;

}
.icon{
	filter: grayscale(100%);
	transition: all 0.5s ;
}
.icon:hover{
	filter: grayscale(0%);
	transition: all 0.5s ;
}
.icon-pop{
	filter: contrast(0%);
	transition: all 0.5s ;
}
.icon-pop:hover{
	filter: contrast(100%);
	transition: all 0.5s ;
	position: relative;
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
.title{
	margin-bottom: 80px;
}
.name{
	font-size: larger;
	color: white;
}
.hshow{
	position: relative;
	font-size: larger;
	color: white;
	right: 0px;
	bottom: 30px;
	opacity: 0;
	transition: all 0.3s ease-out;
}
.wrapper:hover .hshow{
	position: relative;
	font-size: larger;
	color: white;
	right: 1px;
	bottom: -5px;
	opacity: 1;
}
@media only screen and (max-width: 500px){
img{
	width: 50px;
}
.wrapper-flex{
	display: grid;
	grid-template-columns: repeat(2, 50px);
	margin-bottom: 5px;
	/* row-gap: -3px; */
	/* column-gap: -10px; */
}
.wrapper-flex-2{
	display: grid;
	grid-template-columns: repeat(2, 50px);
}
}
</style>