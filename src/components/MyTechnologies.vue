<template>
	<div id="technologies" class="d"></div>
	<div  class="container">
		<div class="tech-container ">

			<div   class="title">
				<h1 >Technologies</h1>
				<p>Here are a few technologies I’ve been working with recently:</p>
			</div>
			<div class="tech-grid">
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
				<div class="wrapper">
					<img src="../images/vue.png" alt="" width="100px" class=" icon">
					<div class="hshow"><h3>VUE</h3></div>
				</div>
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
				<div  class="wrapper">
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
		data(){
			return{
				show: 'h',
			}
		}
	}
</script>

<style scoped>

.tech-grid{
	display: grid;
	grid-template-columns: repeat(4, 150px);
	grid-template-rows: repeat(2, 1fr);
	row-gap: 70px;
	column-gap: 50px;
	justify-content: center;
	margin-left: 100px;
}
.icon{
	filter: grayscale(100%);
	transition:all 0.15s ;
}
.icon:hover{
	filter: grayscale(0%);
	transition: all 0.15s ;
}
.icon-pop{
	filter: contrast(0%);
	transition: all 0.15s ;
}
.icon-pop:hover{
	filter: contrast(100%);
	transition: all 0.15s ;
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
	/* text-align: left; */
	margin-bottom: 80px;
}
.container{
	padding-top: 100px;
}
.name{
	font-size: larger;
	color: white;
}
.hshow{
	position: relative;
	font-size: larger;
	color: white;
	right: 25px;
	bottom: 30px;
	opacity: 0;
}
.wrapper:hover .hshow{
	filter: contrast(100%);
	transition: all 0.15s ;
	position: relative;
	font-size: larger;
	color: white;
	right: 25px;
	bottom: -5px;
	opacity: 1;
}

</style>