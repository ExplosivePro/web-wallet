<template>
	<v-stepper
		v-model="step"
		color = "primary"
		height = "90vh"
		elevation = "0"
		v-if="$store.state.role !== 'user'"
	>
		<v-stepper-items
			class="pa-0"
		>
			<v-stepper-content
				step="1"
				class="pa-0"
			>
				<sub-form
					:rules="email.rules" 
					:handleSubmit="handleEmail"
					label="E-mail"
				/>
			</v-stepper-content>
			
			<v-stepper-content
				step="2"
				class="pa-0"
			>
				<sub-form
					:handleSubmit="handlePassword"
					:rules="password.rules" 
					label="Passowrd"
					type="password"
				/>
			</v-stepper-content>
			<v-stepper-content
				step="3"
				class="pa-0"
			>
				<v-btn
					color="primary"
					@click="handleConfirm"
				>
					Continue
				</v-btn>					
			</v-stepper-content>

		</v-stepper-items>		
	</v-stepper>
</template>
<script>

import SubForm from './form.vue' 

export default {
	components: {
		SubForm
	},
	data () {
		return {
			step: 1,
			email: {
				rules: [
					v => !!v || this.$t('form.required'),
					v => /.+@.+\..+/.test(v) || this.$t('form.invalid', { msg: 'E-mail' })
				]
			},
			password: {
				data: '',
				rules: [
					v => !!v || this.$t('form.required'),
				]
			},
		}
	},
	methods: {
		handleEmail: function () {
			this.step = 2
		},
		handlePassword: function () {
			this.step = 3
		},
		handleConfirm: function () {
			this.$store.commit('setRole', 'user')
		}
	},
	updated () {
		if (this.$store.state.role === 'user') {
			this.$router.push('/')
		}
	}
}
</script>
<style scoped>
	.theme--light.v-stepper {
		background-color: #00000000;
	} 
</style>