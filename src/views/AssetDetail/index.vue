<template>
	<v-container class="px-0">
		<v-row justify="center" class="px-0">
			<v-col cols="8" md="3">
				<v-card class="pa-2">
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
				return this.demo.filter(item => item.id === this.$route.params.id)[0]
			}
		},
		data: function () {
			return {
				demo: [
					{
						"id": "00000000000001b8",
						"metadata": {
							"name": "Stormy Knights Cover",
							"image": "https://cdn.enjinx.io/metadata/raw/1c638f11049314974473e0f96493de3d66146162/f3e338ca66c7f3dc9e88f494e15ae2e8ccdbd434.png",
						"description": "A shield of legends..\nProtects only the most valiant of warriors, englightenment is a must. If one posseses this shield, bow down...\n\nFun Fact:\nThis is probably one of the FIRST custom collectables minted by contract directly, by someone other than ENJIN or their MULTIVERSE game devs!"
						},
					},
					{
						"id": "00000000000001fe",
						"metadata": {
							"name": "WoC Early Access Badge (Limited Edition)",
							"description": "This badge is exclusive to the first 500 early adopters of War of Crypto™ Early Access Sale™. We believe WoC will be a catalyst for mass adoption of Enjin™s blockchain technology. By showing the world what can be achieved by offering our supporters true value, ownership, and freedom over their assets, together, with the help of our community, we think we can change gaming forever. This token is to prove that you were not only here to witness the rise of blockchain gaming, you were here to help build the foundations. Thank you for your support. It means the world to us.",

							"image": "https://cdn.enjinx.io/metadata/raw/f99197b2623b16c72cb7bdf55cc229b0bd3ffde5/6b7827fea67987f08455f91d0bc276f8893761ef.png"
						}
					}
				] 
			}
		}
	}
</script>