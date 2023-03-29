<template>
	<div :class="{'navbar': true, 'navbar--hidden': isNavbarHidden }">
		<div class="nav-cont">

			<div class="logo" v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="1500">
				<div  class="mb-8">
					<a href="./MyHome.vue">

						<img src="../images/bee.png" alt="" class="w-10">
					</a>
				</div>
			</div>
	
			<div class="header-nav ">
				<ul class="flex gap-8 pt-2">
					<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0}" :delay="350">
						
						<a @click="activeLink = 'about'" :class="[activeLink === 'about' ? 'active' : '']" href="#about"> <span>01.</span> about</a>
					</li>
					<!-- <li>
						<a href="#">Experience</a>
					</li> -->
					<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="450">
						<a @click="activeLink = 'projects'" :class="[activeLink === 'projects' ? 'active' : '']" href="#projects"><span>02.</span> projects</a>
					</li>
					<div class="li">
						<li v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="550">
							<a @click="activeLink = 'contact'" :class="[activeLink === 'contact' ? 'active' : '']" href="#contact"><span>03.</span> contact</a>
						</li>	
					</div>
					
				</ul>
			</div>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background: rgba(31, 40, 51, 0.85);  
  backdrop-filter: blur(10px);
  color: #333;
  transition: transform 0.5s;
  padding: 0 60px 72px 45px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25);
}

.nav-cont{
  margin-top: 15px;
  display:flex; 
  justify-content:space-between;
  width: 100%;
}

.navbar--hidden {
  transform: translateY(-100px);
}
/* .header-nav{
	color: #c5c6c7;
} */

h1{
	padding-bottom: 5px;
}
li{
	color: #c5c6c7;
	transition: color 0.5s ease-out;
	font-family: 'Roboto Mono', monospace;
	font-size: 14px;
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
	padding-bottom: 3px;
	color: #66fcf1;
	transition: all 0.5 ease-out;
	border-radius: 2px;
}

</style>