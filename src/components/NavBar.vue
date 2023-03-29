<template>
	<div :class="{'navbar': true, 'navbar--hidden': isNavbarHidden }">
		
		<div class="logo" v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="1500">
			<div  class="">
				<a href="./MyHome.vue">

					<img src="../images/bee.png" alt="" class="w-10">
				</a>
			</div>
		</div>

		<div class="header-nav ">
			<ul class="flex">
				<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0}" :delay="350">
					
					<a @click="activeLink = 'about'" :class="[activeLink === 'about' ? 'active' : '']" href="#about"> <span>01.</span>about</a>
				</li>
				<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="450">
					<a @click="activeLink = 'projects'" :class="[activeLink === 'projects' ? 'active' : '']" href="#projects"><span>02.</span>projects</a>
				</li>
				<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="550">
					<a @click="activeLink = 'technologies'" :class="[activeLink === 'technologies' ? 'active' : '']" href="#technologies"><span>03.</span>Technologies</a>
				</li>
				<div class="li">
					<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="650">
						<a @click="activeLink = 'contact'" :class="[activeLink === 'contact' ? 'active' : '']" href="#contact"><span>04.</span>contact</a>
					</li>	
				</div>
				
				
			</ul>
		</div>
		
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			prevScrollPos: 0,
			isNavbarHidden: false,
			activeLink: '',
		};
	},
	computed: {
		shouldHideNavbar() {
			return this.prevScrollPos < window.pageYOffset;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			this.isNavbarHidden = this.shouldHideNavbar;
			this.prevScrollPos = window.pageYOffset;
		},
	},
};
</script>


<style scoped>
.navbar {
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	z-index: 100;
	background: rgba(31, 40, 51, 0.85);  
	backdrop-filter: blur(10px);
	color: #333;
	transition: transform 0.5s;
	padding: 20px 75px 50px 50px;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25);
	box-sizing: border-box;
}

.navbar--hidden {
  transform: translateY(-100px);
}
.logo{
	position: relative;
	bottom: 5px;
}
li{
	color: #c5c6c7;
	transition: color 0.5s ease-out;
	font-family: 'Roboto Mono', monospace;
	font-size: 14px;
	margin-left: 35px;
}
li:hover{
	color: #66fcf1;
	transition: color 0.5s ;
}
li:visited{
	color: #66fcf1;
	transition: color 0.5s ;
}
.active{
	border-bottom:2px solid #66fcf1;
	color: #66fcf1;
	transition: all 0.5 ease-out;
	border-radius: 2px;
}
</style>