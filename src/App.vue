<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signin">Sign In</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  name: 'app',
  beforeCreate() {
    AmplifyEventBus.$on('authState', info => {
      // console.log("AmplifyEventBus", info)
      switch(info) {
        case 'signedIn':
        case 'signedOut':
          this.$router.push('/');
          break;
        default:
          // do nothing
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
