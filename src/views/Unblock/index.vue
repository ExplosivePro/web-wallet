<template>
	<v-container v-if="$store.state.role==='guest'" class="d-flex flex-column full-height" style="height: 95vh">

		<div
			class="text-h6 transition-swing"
			:text="'text'"
		>
		</div>

		<v-spacer></v-spacer>

		<v-btn color="primary" @click="create" class="mb-4">
			{{ $t('unblock.create') }}
		</v-btn>
	</v-container>

</template>
<script>
	export default {
		methods: {
			create: function () {
				this.$router.push('/unblock/create')
			},
		},

		updated() {
			if (this.$store.state.role === 'user') {
				this.$router.push('/wallet')
			}
		}
	}
</script>
