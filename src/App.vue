<template>
  <div id="app">

    <div class="logo">
      <img src="./assets/vuejs.png">
      <span>+</span>
      <img src="./assets/cordova.png">
    </div>

    <h2>Cordova status</h2>
    <pre v-if="cordova">{{cordova|json}}</pre>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data: function () {
    return {
      cordova: Vue.cordova
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

pre {
  background: #eee;
  text-align: left;
  border: solid 1px #ccc;
  padding: 20px;
  width: 600px;
}
</style>
