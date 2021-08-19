<template>
	<v-col cols="12">
		<v-card
			class="pa-2"
		>
			<h2>{{data.chain}}</h2>
			<v-row
				v-for="item in data.addresses[0].balances"
				:key="item.id"
			>
				<v-col cols="12">
					<h3>{{item.id.length > 13 ? `${item.id.substr(0,6)}...${item.id.substr(-4,4)}`: item.id}}</h3>
					<p>{{item.balance}}</p>
				</v-col>
			</v-row>
		</v-card>
	</v-col>
</template>
<script>
	export default {
		props: ['data']
	}
</script>