<template>
  <div id="app">

    <div class="logo">
      <img src="./assets/vuejs.png">
      <span>+</span>
      <img src="./assets/cordova.png">
    </div>


    <h2>Cordova status</h2>
    <pre v-if="cordovaDump">
      {{cordovaDump|json}}
    </pre>

    <h2>Child component</h2>
    <child></child>

  </div>
</template>

<script>
import Child from './Child'

export default {
  components: {
    Child
  },
  computed: {
    cordovaDump: function () {
      console.log('cordovaDump', this.$root)
      return this.cordova
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo span {
  position: relative;
  top: -30px;
  font-size: 40px;
  margin: 0 30px;
}

.logo img {
  width: 100px;
  height: 100px;
}
</style>
