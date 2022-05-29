import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
debugger;
new Vue({
  el: '#vue-frontend-app',
  router,
  render: h => h(App)
}).$mount('#vue-frontend-app')
