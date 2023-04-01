<template>
	<div class="loading-screen">
		<img class="icon" src="../images/bee.jpg" alt="b">
	</div>
</template>

<script>
	export default{
		name: 'MyLoadingpage',
		methods: {}
	}
	

</script>

<style scoped>
.loading-screen {
	display: flex;
	justify-content: center;
	padding-top: 20%;
}
.loading-screen .icon {
  animation: bounce 1s infinite;
  width: 60px;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
	background: #66fcf1;
	border-radius: 100%;
  }
  100% {
    transform: translateY(0);
  }
}
@media only screen and (max-width: 500px){

	.loading-screen {
		display: flex;
		justify-content: center;
		padding-top: 70%;
		padding-left: 70px;
		width: 100%;
		height: 100%;
	}

	.loading-screen .icon {
		animation: swing 1s infinite;
		width: 60px;
	}

	@keyframes swing {
		0% {
			transform: translateX(0px);
			background: #66fcf1;
			border-radius: 100%;
		}
		50% {
			transform: translateX(-50px);
		}
		100% {
			transform: translateX(0px);
		}
	}
}
</style>



