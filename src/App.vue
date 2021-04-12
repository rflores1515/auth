<template>
  <div id="app">
    <section v-if="isUserAuth">
      Welcome {{getUser.email}}
    </section>
    <Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Login
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
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
</style>
