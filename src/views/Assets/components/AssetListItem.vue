<template>
	<v-col cols="12" md="4">
		<v-card
			class=" py-2 px-2"
			:to="itemUrl"
		>
			<v-row>
				<v-col cols="6">
					<v-img
						lazy-src="https://picsum.photos/id/11/10/6"
						:src="data.metadata.image"
					></v-img>
				</v-col>
				<v-col cols="6" align-self="center">
					{{data.metadata.name}}
				</v-col>
			</v-row>
		</v-card>
	</v-col>
</template>
<script>
	export default {
		props: ['data'],
		computed: {
			itemUrl: function () {
				return `/assets/${this.data.id}`
			}
		}
	}
</script>