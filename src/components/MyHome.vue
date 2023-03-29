<template>
	
	<div class="home flex justify-center">

		<div class="home-container text-left" >

			<p class="hi-p"  v-motion :initial="{ opacity: 0, y: -100, }" :enter="{ opacity: 1, y: 0, }" :delay="1000">Hi, my name is </p>
			<h1 v-motion :initial="{ opacity: 0, y: -100, }" :enter="{ opacity: 1, y: 0, }" :delay="1100" class="text-7xl font-bold mb-5">BENJAMIN NOMBA.</h1>
			<h1 v-motion :initial="{ opacity: 0, y: -100, }" :enter="{ opacity: 1, y: 0, }" :delay="1200" class="h1-2 text-6xl font-bold mb-7">I build things web related.</h1>
			<p v-motion :initial="{ opacity: 0, y: -100, }" :enter="{ opacity: 1, y: 0, }" :delay="1300" class="mb-14 w-4/6">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. My focus has always been building accessible, human-centered products and Curating indepth Knowledge in my specialization along the way.</p>

			<div v-motion :initial="{ opacity: 0,  x: -200, }" :enter="{ opacity: 1,  x: 0, }" :delay="1400" class="button-div">

				<a  href="https://drive.google.com/file/d/1oHiAa40omJBT40nmi8ZFMJSSCIGGFrU5/view">
					<button class="button">Check out my Resume</button>
				</a>
			</div>
			
		</div>
	</div>
</template>

<script>


export default{
	name: 'MyHome',
	components:{
		
	}
}
</script>

<style scoped>
.home{
	margin-bottom: 60px;
	padding-top: 150px
}
.home-container{
	width: 75%;
	height: 100%;
	box-sizing: border-box;
}
.hi-p{
	padding-bottom: 20px;
}
.button{
	border: 2px solid #66fcf1;
	padding: 15px 30px;
	font-family: 'Roboto Mono', monospace;
	border-radius: 5px;
	background: linear-gradient(to right, #2a7974 50%, #1f2833 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: all .5s ease-out;
	color:#66fcf1;
}
.button:hover{
	background-position: left bottom;
}
p{
	color: #c5c6c7;
	font-family: 'Roboto Mono', monospace;
}
.p-2{
	color: #e2e8ef;
}
h1{
	color: #66fcf1;
	font-family: 'Ubuntu', sans-serif;
}
.h1-2{
	color: #45A29E;
}

</style>