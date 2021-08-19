import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }, {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts')
  }, {
    path: '/unblock',
    name: 'Unblock',
    component: () => import(/* webpackChunkName: "unblock" */ '../views/Unblock'),

    meta: {
      role: 'guest',
      layout: 'login'
    }
  }, {
    path: '/unblock/create',
    name: 'UnblockCreate',
    component: () => import(/* webpackChunkName: "unblock" */ '../views/Unblock/Create'),

    meta: {
      role: 'guest',
      layout: 'login'
    }
  }, {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings'),
  }, {
    path: '/unblock/login',
    name: 'UnblockLogin',
    component: () => import(/* webpackChunkName: "unblock" */ '../views/Unblock/Login'),

    meta: {
      role: 'guest',
      layout: 'login'
    }
  },{
    path: '/assets',
    name: 'Assets',
    component: () => import(/* webpackChunkName: "assets" */ '../views/Assets')
  }, {
    path: '/assets/:id',
    name: 'AssetDetail',
    component: () => import(/* webpackChunkName: "assetDetail" */ '../views/Wallet/AssetDetail')
  }, {
    path: '/wallet',
    name: 'Wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/Wallet'),
  }, {

    path: '/qr-scan',
    name: 'QRScan',
    component: () => import(/* webpackChunkName: "qrscan" */ '../views/QRScan'),

  }, {
    path: '*',
    redirect: '/wallet'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {

  if (to.meta.role !== 'guest' && store.state.role  !== 'user') {
    next({ path: '/unblock' })
  } else if(to.meta.role === 'guest' && store.state.role  === 'user') {
    next({ path: '/wallet' })
  } else {
    next()
  }

});

export default router
