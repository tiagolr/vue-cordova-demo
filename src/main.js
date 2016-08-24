import Vue from 'vue'
import App from './App'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  option1: 'test'
})

console.log('main', Vue.cordova)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
