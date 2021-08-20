<template>
	<v-container fluid>
		<v-row>
			<v-col cols="6">
				<span class="line-2">
					Language
				</span>
			</v-col>
			<v-col cols="6" class="px-0">
				<language-bar />
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	import LanguageBar from '@/components/LanguageBar'
	export default {
		components: {
			LanguageBar
		}
	}
</script>
<style>
	.line-2 {
		line-height: 2;
	}
</style>