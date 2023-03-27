<template>
	<div class="my-footer">

		<div class="footer flex justify-between">
	
			<div class="logo pt-14"><img src="../images/bee.png" alt="" class="w-10"></div>
			<div class="links">
				<ul class="flex flex-col gap-5">
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
</style>