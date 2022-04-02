import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home')
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
  }, {
    path: '/unblock/login',
    name: 'UnblockLogin',
    component: () => import(/* webpackChunkName: "unblock" */ '../views/Unblock/Login'),

    meta: {
      layout: 'login'
    }
  },{
    path: '/assets',
    name: 'Assets',
    component: () => import(/* webpackChunkName: "assets" */ '../views/Assets')
  }, {
    path: '/assets/:id',
    name: 'AssetDetail',
    component: () => import(/* webpackChunkName: "assetDetail" */ '../views/AssetDetail')
  }, {
    path: '/wallet',
    name: 'Wallet',
    component: () => import(/* webpackChunkName: "wallet" */ '../views/Wallet'),
    meta: {
      role: 'user'
    }
  }, {
    path: '/backup',
    name: 'BackUp',
    component: () => import(/* webpackChunkName: "others" */ '../views/BackUp'),
    meta: {
      hideFooter: true
    }
  }, {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async (to, from, next) => {
  if (to.meta.role === 'user' && store.state.role  !== 'user') {
    next({ path: '/unblock' })
  } else if(to.meta.role === 'guest' && store.state.role  === 'user') {
    next({ path: '/wallet' })
  } else {
    next()
  }

});

export default router
