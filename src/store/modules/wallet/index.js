import apollo from '@/vue-apollo'

import GET_OVERVIEW from './gql/getOverview.gql'


const state = () => ({
  data: [
    {
      "chain": "BTC",
      "addresses": [
        {
          "address": "3828uLnVCCUwWdBEw8u3pARXoFUVZu7eH7",
          "balances": [
            {
              "id": "bitcoin",
              "balance": "0",
              "price": null
            }
          ]
        }
      ]
    },
  ]
})

// actions
const actions = {

  getOverview ({ commit }, variables = {
    "addresses": [
        {
            "name": "BTC", 
            "addresses": ["3828uLnVCCUwWdBEw8u3pARXoFUVZu7eH7"]
        }
      ]
    }) {
    return apollo.clients.overview.query({
      query: GET_OVERVIEW,
      variables: variables
    }).then(({ data }) => {
      commit('setOverview', data)
    })
  }

}

// mutations
const mutations = {
  setOverview (data) {
    state.data = Object.freeze(data)
  }
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}