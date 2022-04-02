<template>
	<div class="mt-14 fixed">
		<v-card>
			<v-tabs
				hide-slider
			>
				<v-tab
					v-for="item in navigation"
					:key="item.title"
					:to="item.link"
				>
					{{ $t(item.title) }}
				</v-tab>
			</v-tabs>
		</v-card>
	</div>
</template>
<script>
	import config from '@/config.json'

	export default {
		data() {
			return {
				navigation: config.navigation
			}
		}
	}

</script>
<style>
.v-slide-group__prev {
	display: none !important
}
.fixed {
	position: sticky;
	top: 0;
}
</style>