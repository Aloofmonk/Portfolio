<template>
	<div :class="{'navbar': true, 'navbar--hidden': isNavbarHidden }">
		<div class="logo">
			<h1>B</h1>
		</div>

		<div class="header-nav ">
			<ul class="flex gap-5">
				<li>
					<a href="#about">About</a>
				</li>
				<!-- <li>
					<a href="#">Experience</a>
				</li> -->
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				
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


<style scope>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  /* background-color: #333; */
  color: #333;
  transition: transform 0.3s;
  padding: 30px 60px;
  display:flex; 
  justify-content:space-between;
}

.navbar--hidden {
  transform: translateY(-80px);
}

</style>