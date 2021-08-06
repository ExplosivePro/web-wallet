import apollo from '@/vue-apollo'

import GET_CONTACTS from './contacts1/gql/getBulk.gql'

const state = () => ({
	data: [],
})

// actions
const actions = {
	getContacts: ({ commit }, variables = {dictionary: []}) => {
		return apollo.clients.contacts.query({
			query: GET_CONTACTS,
			variables: variables
		}).then(({ data }) => {
			commit('setContacts', data)
		})
	}
}

// mutations
const mutations = {
	setContacts (state, data) {
		state.data = data
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}