<template>
	<v-footer
		app
		:padless="true"
		height = "80"
		class="flex-row flex-center"
	>
		<v-card
			flat
			tile
			width="100%"
			class="text-center transparent"
		>
			<v-btn
				class="mx-4 primary"
			>
			{{$t('footer.secureMyWallet')}}
			</v-btn>
		</v-card>
		<!-- -->
	</v-footer>
</template>
