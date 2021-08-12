import Vue from 'vue'
import Vuex from 'vuex'

import contacts from './modules/contacts'
import wallet from './modules/wallet'

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
    contacts,
    wallet
  },
})
