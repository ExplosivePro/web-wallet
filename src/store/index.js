import Vue from 'vue'
import Vuex from 'vuex'

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
})
