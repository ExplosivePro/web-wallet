import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts'
import Wallet from '../views/Wallet'
import CreateWallet from '../views/Wallet/create'

import AssetDetail from '../views/Wallet/AssetDetail'
import Assets from '../views/Wallet/Assets'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/wallet/create',
    name: 'CreateWallet',
    component: CreateWallet,
    meta: {
      role: 'guest',
      layout: 'login'
    }
  },
  {
    path: '/wallet/assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/wallet/assets/:id',
    name: 'AssetDetail',
    component: AssetDetail
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      role: 'user'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'CreateWallet',
    component: CreateWallet,
    meta: {
      role: 'guest',
      layout: 'login'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {

  if (to.meta.role === 'user' && !localStorage.getItem('wallet-key') ) {
    next({ path: '/wallet/create' })
  } else if(to.meta.role === 'guest' && localStorage.getItem('wallet-key')) {
    next({ path: '/wallet' })
  } else {
    next()
  }

});

export default router
