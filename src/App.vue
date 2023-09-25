<template>
   <MyLoading v-if="isLoading"></MyLoading>
    <div v-else>
      <NavBar/>
      <MyHome/>
      <MyAboutMe/>
      <MyProjects/>
      <MyTechnologies/>
      <MyContact/>
    </div>
</template>

<script>
import MyHome from './components/MyHome.vue';
import MyAboutMe from './components/MyAboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import MyLoading from './components/MyLoading.vue';
import NavBar from './components/NavBar.vue';
import MyTechnologies from './components/MyTechnologies.vue';



export default {
  name: 'App',
  components: {
    MyHome,
    MyAboutMe,
    MyProjects,
    MyContact,
    MyLoading,
    NavBar,
    MyTechnologies,
  },
  props: {
    activeLink: String
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    // Simulate a loading delay
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Ubuntu:wght@700&display=swap');

html{
  scroll-behavior: smooth;
  background: #1f2833;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
