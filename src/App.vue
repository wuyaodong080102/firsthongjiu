<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <div id="app">
    <Carousel v-if="!isTitleDetailRoute" />
    <router-view/>
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    Carousel
  },
  setup() {
    const route = useRoute()
    const isTitleDetailRoute = computed(() => {
      return route.path.startsWith('/title/')
    })
    return {
      isTitleDetailRoute
    }
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
  background-color: #000;
  /* background-color: white; */
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  background-color: #000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
