import Vue from 'vue'
import Router from 'vue-router'
import Glossary from 'frontend/pages/Glossary.vue'
import Catalogue from 'frontend/pages/Catalogue.vue'
import Profile from 'frontend/pages/Profile.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Glossary',
      component: Glossary
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: Catalogue
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
  ]
})
