<template>
	<div class="my-footer">

		<div class="footer flex justify-between">
	
			<div class="logo">B</div>
			<div class="links">
				<ul class="flex gap-5">
					<li>a</li>
					<li>b</li>
					<li>c</li>
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