<template>
	<div :class="{'navbar': true, 'navbar--hidden': isNavbarHidden }">

			<button v-motion :initial="{ y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="550" @click="ex = !ex; add = !add" id="menu-btn" class=" block hamburger" :class="[ex === true ? 'open' : '' ]">
				<span class="ham1"></span>
				<span class="ham2"></span>
				<span class="ham3"></span>
			</button>


		<div class="neu" :id="[ex === true ? 'open-menu' : 'menu']">
			<a class="a" @click="activeLink = 'about'; ex = !ex" :class="[activeLink === 'about' ? 'active' : '', add === true && 'li']" href="#about">about</a>
			<a class="a" @click="activeLink = 'projects'; ex = !ex" :class="[activeLink === 'projects' ? 'active' : '', add === true && 'li']" href="#projects">projects</a>
			<a class="a" @click="activeLink = 'technologies'; ex = !ex" :class="[activeLink === 'technologies' ? 'active' : '', add === true && 'li']" href="#technologies">technologies</a>
			<a @click="activeLink = 'contact'; ex = !ex" class="cont a" :class="[activeLink === 'contact' ? 'active' : '', add === true && 'li']" href="#contact">contact</a>
		</div>

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
			ex: false,
			view: 'menu',
			add: false,
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
.active{
	border-bottom:2px solid #66fcf1;
	color: #66fcf1;
	transition: all 0.5 ease-out;
	border-radius: 2px;
}
.neu{
	display: none;
}
.hamburger{
	display: none;
}

@media only screen and (max-width: 500px){
.header-nav{
	display: none;
}
.navbar{
	
	z-index: 100;
	background: none;  
	backdrop-filter: blur(0px);
	color: #000;
	box-shadow: none;
	box-sizing: border-box;
}

	.logo{
		display: none;
	}
	
	#menu{
		display:flex;
		position: fixed;
		top: 35px;
		left: -300px;
		flex-direction: column;
		align-items: center;
		align-self: end;
		padding: 0 100px;
		padding-top: 20px;
		opacity: 0;
		visibility: hidden;
		margin-top: 10;
		font-weight: bold;
		background: rgb(35, 59, 89);
		align-self: center;
		width: auto;
		z-index: 100;
		color: #c5c6c7;
		transition: all .7s ease-out;
		animation: bounce-button 1s ease-in-out;
		animation-direction: reverse;

	}
	#open-menu{
		display:flex;
		position: fixed;
		top: 35px;
		left: 35px;
		flex-direction: column;
		align-items: center;
		align-self: end;
		visibility: visible;
		padding: 0 100px;
		padding-top: 20px;
		margin-top: 10;
		font-weight: bold;
		background: rgba(40, 54, 71, 0.99);
		align-self: center;
		width: auto;
		z-index: 1000;
		color: #c5c6c7;
		border-radius: 5px;
		transition: all .7s ease-out;
		animation: bounce-button 1s ease-in-out;
		animation-direction: alternate;
		box-shadow: 3px 0 10px rgb(29, 29, 29);
		
	}

	.a{
		margin-bottom: 40px;

	}

	.cont{
		margin-bottom: 20px;
	}
	
	.hamburger{
		left: 300px;
		cursor: pointer;
		width: 24px;
		height: 24px;
		transition: all 0.25;
		position: fixed;
		display: inherit;
		z-index: 10000;
		box-shadow: none;
		outline: none;
		backdrop-filter: blur(100px);
		background: rgba(54, 72, 94, 0.35);
		border-radius: 5px;
		padding-bottom: -10px;
	}
	.hamburger button:focus{
		box-shadow: none;
	}
	.ham1,
	.ham2,
	.ham3{
		position: absolute;
		top: 0;
		width: 24px;
		height: 2px;
		background: #000;
		transform: rotate(0);
		transition: all 0.5s;
		border: 1px solid #66fcf1;
	}
	.ham2{
		transform: translateY(7px);
	}
	.ham3{
		transform: translateY(14px);
	}
	.open{
		transform: rotate(90deg);
		transform: translateY(0px);
	}
	.open .ham1{
		transform: rotate(45deg) translateY(6px) translate(6px);
	}
	.open .ham2{
		display: none;
	}
	.open .ham3{
		transform: rotate(-45deg) translateY(6px) translate(-6px);
	}
	@keyframes bounce-button {
		0% {
			left: -300px;
		}
		100% {
			left: 35px;
		}
	}
	@keyframes appear-button {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
}
</style>