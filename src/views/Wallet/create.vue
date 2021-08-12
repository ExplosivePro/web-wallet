<template>
	<v-container v-if="$store.state.role==='guest'" class="d-flex flex-column full-height" style="height: 95vh">
		<v-spacer></v-spacer>
		<v-btn color="primary" @click="create">{{ $t('wallet.create') }}</v-btn>
	</v-container>

</template>
<script>
	export default {
		methods: {
			create: function () {
				localStorage.setItem('wallet-key', '0x123')
			}
		},
		updated() {
			if (this.$store.state.role === 'user') {
				this.$router.push('/wallet')
			}
		}
	}
</script>
