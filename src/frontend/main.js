import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.use(BootstrapVue)

import './plugins/table.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#vue-frontend-app',
  router,
  render: h => h(App)
}).$mount('#vue-frontend-app')
