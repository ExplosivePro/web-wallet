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
				<h5 class="col-8 col">{{this.data.metadata.name}}</h5>
				<span class="col-4 col">{{this.data.metadata.properties ? this.data.metadata.properties.Rarity: ""}}</span>
				<p class="col-12">{{this.data.metadata.description}}</p>
				<v-row class="px-8">
					<v-col cols="10" offset="1" md="3" offset-md="9">
						<v-btn class="primary col-12">{{$t('footer.secureMyWallet')}}</v-btn>
					</v-col>
				</v-row>
			</v-col>

		</v-row>

	</v-container>
</template>
<script>
	export default {
		computed: {
			data: function () {
				return this.$store.state.wallet.assets.filter(item => item.id === this.$route.params.id)[0]
			}
		}
	}
</script>