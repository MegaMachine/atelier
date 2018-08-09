import Vue from 'vue'
import Router from 'vue-router'
import About from './views/sections/About.vue'
import Contacts from './views/sections/Contacts.vue'

import Home from './views/sections/Home.vue'
import Cloth from './views/sections/Cloth.vue'
import Models from './views/sections/Models.vue'
import FinishedGoods from './views/sections/FinishedGoods.vue'
import PrivateCabinet from './views/sections/PrivateCabinet.vue'
import ModelView from './views/sections/ModelView.vue'
import FinishedGoodView from './views/sections/FinishedGoodView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/models',
      name: 'models',
      component: Models
    },
    {
      path:'/cloth',
      name:'cloth',
      component: Cloth
    },
    {
      path: '/finished-goods',
      name: 'finished-goods',
      component: FinishedGoods
    },
    {
      path: '/private-cabinet',
      name: 'private-cabinet',
      component: PrivateCabinet
    },
    {
      path: '/model-view/:id',
      name: 'model-view',
      component: ModelView
    },
    {
      path: '/finished-good-view/:id',
      name: 'finished-good-view',
      component: FinishedGoodView
    },
  ]
})
