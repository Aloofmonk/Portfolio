<template>
  <MyHome/>
  <MyAboutMe/>
  <MyProjects/>
  <MyContact/>
</template>

<script>
import MyHome from './components/MyHome.vue';
import MyAboutMe from './components/MyAboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';



export default {
  name: 'App',
  components: {
    MyHome,
    MyAboutMe,
    MyProjects,
    MyContact,
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
