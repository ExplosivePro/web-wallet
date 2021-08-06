import apollo from '@/vue-apollo'

import GET_CONTACTS from './gql/getBulk.gql'

const state = () => ({
	data: [],
})

// actions
const actions = {
	getContacts ({ commit }, variables = {dictionary: []}) {
		return apollo.clients.platform.query({
			query: GET_CONTACTS,
			variables: variables
		}).then(({ data }) => {
			commit('setContacts', data)
		})
	}
}

// mutations
const mutations = {
	setContacts (data) {
		state.data = data
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}