<template>
  <div id="app">
    <div class="logo">
      <img alt="Vue logo" src="./assets/luffy.png">
    </div>
    <Index msg="Welcome to my space"/>
  </div>
</template>

<script>
import Index from './components/'

export default {
  name: 'app',
  components: {
    Index
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
.logo {
  display: inline-block;
  width: 300px;
}

img {
  width: 100%;
}

</style>
