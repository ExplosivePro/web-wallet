import Vue from 'vue'
import VueRouter from 'vue-router'

const CreateWallet = () => import('../views/Wallet/create');

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts')
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
    path: '/assets',
    name: 'Assets',
    component: () => import(/* webpackChunkName: "assets" */ '../views/Assets')
  },
  {
    path: '/assets/:id',
    name: 'AssetDetail',
    component: () => import(/* webpackChunkName: "assetDetail" */ '../views/Wallet/AssetDetail')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/Wallet'),

    meta: {
      role: 'user'
    }
  }, {
    path: '/',
    redirect: '/wallet/create'
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
