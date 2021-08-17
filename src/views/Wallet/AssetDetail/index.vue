<template>
	<v-container>
		<v-row justify="center">
			<v-col cols="8" md="3">
				<v-card class="px-2 py-2">
					<v-img
						lazy-src="https://picsum.photos/id/11/10/6"
						:src="this.data.metadata.image"
					/>
				</v-card>
			</v-col>
			<v-col class="mt-4 row" cols="12" md="9">
				<h4 class="col-8 col">{{this.data.metadata.name}}</h4>
				<span class="col-4 col">{{this.data.metadata.properties ? this.data.metadata.properties.Rarity: ""}}</span>
				<p class="col-12">{{this.data.metadata.description}}</p>
			</v-col>

		</v-row>

	</v-container>
</template>
<script>
	export default {
		computed: {
			data: function () {
				return this.$store.state.assets.data.filter(item => item.id === this.$route.params.id)[0]
			}
		}
	}
</script>