<template>
	<v-container v-if="$store.state.role==='guest'" class="d-flex flex-column full-height" style="height: 95vh">
		<v-spacer></v-spacer>
		<v-btn color="primary" @click="create" class="mb-4">
			{{ $t('wallet.create') }}
		</v-btn>
		<v-btn color="primary" @click="login" class="mb-4">
			{{ $t('wallet.login') }}
		</v-btn>
	</v-container>

</template>
<script>
	export default {
		methods: {
			create: function () {
				localStorage.setItem('wallet-key', '0x123')
				this.$store.commit('setRole', 'user')
			},
			login: function () {
				console.log("login");
			}
		},
		updated() {
			if (this.$store.state.role === 'user') {
				this.$router.push('/wallet')
			}
		}
	}
</script>
