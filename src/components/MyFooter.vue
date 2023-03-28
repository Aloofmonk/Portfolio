<template>
	<div class="my-footer">

		<div class="footer flex justify-between">
	
			<div class="logo pt-28">
				<a href="#home">
					
					<img src="../images/bee.png" alt="" class=" logo w-11">
				</a>
			</div>
			<div class="links">
				<ul class="flex flex-col gap-5">
					<li class="li-button"><a href="https://drive.google.com/file/d/1oHiAa40omJBT40nmi8ZFMJSSCIGGFrU5/view"><button class="button">resume</button></a>
					</li>
					<li class=" img"><img src="../images/github.png" alt="" class="w-6"></li>
					<li class=" img"><img src="../images/linke.png" alt="" class="w-6"></li>
					<li class=" img">
						<div class="img-back">
							<img src="../images/twitter.png" alt="" class=" w-6">
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="base-container">
			<p>
				Designed & Built by <span><a href="https://bnomba0704@gmail.com">Benjamin Nomba</a></span> 
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'MyFooter'
	}
</script>

<style scoped>
.footer{
	border-bottom: 1px solid black;
	padding-bottom: 25px;
}
.my-footer{
	padding: 30px 60px;
}
.base-container{
	padding-top: 25px;
}
.button{
	border: 2px solid #66fcf1;
	padding: 5px 10px 5px 10px;
	border-radius: 5px;background: linear-gradient(to right, #2a7974 50%, #1f2833 50%);
	background-size: 200% 100%;
	background-position: right bottom;
	transition: all .5s ease-out;
	color: #66fcf1;
	font-family: 'Roboto Mono', monospace;
}
.button:hover{
	background-position: left bottom;
}
p{
	font-family: 'Roboto Mono', monospace;
	color:#c5c6c7;
}
.logo{
    transform: translateY(0);
    transition: all 0.5s ease-out;
}
.logo:hover{
	color: #66fcf1;
	cursor: pointer;
    transform: translateY(-4px);
}
.img{
	padding-left: 35%;
}
img{
	padding: 2px;
}
img:hover{
	background: #66fcf1;
	border-radius: 100%;
	cursor: pointer;
}
span{
	font-family: 'Ubuntu', sans-serif;
	color: #66fcf1;
}
</style>