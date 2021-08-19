<template>
	<v-container

		v-if="$store.state.role !== 'user'"
		class="d-flex flex-column"
		style="height:100%"
	>
		<v-spacer />
		<v-card
			class="pa-4"
		>
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
			>
				<v-text-field
					v-model="email.data"
					:rules="email.rules"
					label="E-mail"
					required
				></v-text-field>
				<v-text-field
					v-model="password.data"
					:rules="password.rules"
					label="Password"
					required
					type="password"
				></v-text-field>

				<v-checkbox
					v-model="checkbox"
					:rules="[v => !!v || 'You must agree to continue!']"
					label="Do you agree?"
					required
				></v-checkbox>

				<v-btn
					:disabled="!valid"
					color="success"
					class="mr-4"
					@click="submit"
				>
					Validate
				</v-btn>
			</v-form>
		</v-card>
		<v-spacer />
	</v-container>
</template>
<script>
export default {
	data: function () {
		return {
			valid: true,
			email: {
				data: '',
				rules: [
					v => !!v || this.$t('form.required'),
					v => /.+@.+\..+/.test(v) || this.$t('form.invalid', { msg: 'E-mail' })
				]
			},
			password: {
				data: '',
				rules: [
					v => !!v || this.$t('form.required')
				]
			},
			select: null,
			checkbox: false,
		}
	},
	methods: {
		submit () {
			if (this.$refs.form.validate()) {
				//TODO submit form to the server, get back token and let user login
				this.$store.commit('setRole', 'user');
			}
		}
	},
	updated() {

		if (this.$store.state.role === "user") {
			this.$router.push('/')
		}
	}
}
</script>
<style scoped>
</style>