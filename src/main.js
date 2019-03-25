import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import HCHtmlWrapper from '@hcflgov/vue-html-wrapper'
import '@hcflgov/vue-html-wrapper/dist/HcHtmlWrapper.css'

Vue.use(HCHtmlWrapper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
