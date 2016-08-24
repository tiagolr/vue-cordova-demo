import Vue from 'vue'
import App from './App'

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})
