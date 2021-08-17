import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts'
import wallet from './modules/wallet'
import assets from './modules/assets'

Vue.use(Vuex)

const state = () => ({
  role: 'guest',
  title: ''
})

const mutations = {
  setTitle (state, data) {
    state.title = data
  },

  setRole (state, data) {
    state.role = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    assets,
    contacts,
    wallet
  }
})
