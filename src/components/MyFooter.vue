<template>
	<div class="my-footer">

		<div class="footer flex justify-between">
	
			<div class="logo pt-28">
				<a href="./MyHome.vue">
					
					<img src="../images/bee.png" alt="" class=" logo w-11">
				</a>
			</div>
			<div class="links">
				<ul class="flex flex-col gap-5">
					<li class="li-button"><a href="https://drive.google.com/file/d/1oHiAa40omJBT40nmi8ZFMJSSCIGGFrU5/view"><button class="button">resume</button></a>
					</li>
					<li><img src="../images/github.png" alt="" class="w-6"></li>
					<li><img src="../images/linkedin.jnp.webp" alt="" class="w-8"></li>
					<li><img src="../images/twitter.png" alt="" class="w-6"></li>
				</ul>
			</div>
		</div>
		<div class="base-container">
			Designed & Built by Benjamin Nomba
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
}
.button:hover{
	background-position: left bottom;
}
</style>