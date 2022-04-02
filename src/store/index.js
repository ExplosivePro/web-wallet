import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  role: 'guest',
  title: '',
  tokenFromBeam: ''
})

const mutations = {
  setTitle (state, data) {
    state.title = data
  },

  setRole (state, data) {
    state.role = data
  },

  setBeamFromToken(state, data) {
    state.tokenFromBeam = data
  }
}

export default new Vuex.Store({
  state,
  mutations,
})
