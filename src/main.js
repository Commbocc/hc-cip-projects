import Vue from 'vue'
import HCHtmlWrapper from '@hcflgov/vue-html-wrapper'
import App from './App.vue'

import router from './router'
import store from './store'

Vue.use(HCHtmlWrapper)

new Vue({
  el: '#hc-main',
  router,
  store,
  render: h => h(App)
})
