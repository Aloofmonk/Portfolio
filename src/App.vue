<template>
   <MyLoading v-if="isLoading"></MyLoading>
    <div v-else>
      <MyHome/>
      <MyAboutMe/>
      <MyProjects/>
      <MyContact/>
    </div>
</template>

<script>
import MyHome from './components/MyHome.vue';
import MyAboutMe from './components/MyAboutMe';
import MyProjects from './components/MyProjects';
import MyContact from './components/MyContact';
import MyLoading from './components/MyLoading.vue';



export default {
  name: 'App',
  components: {
    MyHome,
    MyAboutMe,
    MyProjects,
    MyContact,
    MyLoading,
  },
  data() {
    return {
      isLoading: true
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
