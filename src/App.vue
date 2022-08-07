<template>
  <div id="app"  >
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <img src="./assets/Background.jpg"/> -->
    <LinkPreview />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import LinkPreview from './components/LinkPreview.vue'
//import image from './assets/b'

export default {
  // components:{},
  name: 'App',
  components: {
   /// HelloWorld,
    LinkPreview
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* .appBack{
  background-image:url('./assets/Background.jpg');
  background-size: cover;
} */
</style>
