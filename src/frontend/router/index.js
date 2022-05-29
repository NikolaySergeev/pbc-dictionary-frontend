import Vue from 'vue'
import Router from 'vue-router'
import Home from 'frontend/pages/Home.vue'
import Profile from 'frontend/pages/Profile.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
