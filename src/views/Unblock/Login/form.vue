<template>
	<v-container
		class="d-flex flex-column no-padding"
	>
		<v-spacer />
		<v-card
			class="px-4 py-4"
		>
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
				@submit="submit"
			>
				<v-text-field
					v-model="data"
					:rules="rules"
					:label="label"
					required
					:type="type"
				></v-text-field>

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
	props: {
		handleSubmit: Function,
		rules: Array,
		label: String,
		type: {
			type: String,
			default: "text"
		}
	},
	data: function () {
		return {
			valid: true,
			data: '',
		}
	},
	methods: {
		submit (event) {
			event.preventDefault()
			if (this.$refs.form.validate()) {
				//TODO submit form to the server, get back token and let user login
				this.handleSubmit()
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