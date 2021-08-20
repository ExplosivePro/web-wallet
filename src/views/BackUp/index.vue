<template>
	<v-container class="text-center">
		<v-row class="my-4">
			<v-col cols="12">
				{{$t('backup.header')}}
			</v-col>
		</v-row>
		<v-row>
			{{$t('backup.important')}}
		</v-row>

		<v-row class="mt-12">
			<v-col cols="12" class="py-0">
				{{$t('backup.recommend')}}
			</v-col>
			<v-col cols="12" align="center" class="py-0">
				<v-img
					src="/static/app-store-badge.svg" 
					width="80vmin"
					height="25vmin"
				/>
			</v-col>
			<v-col cols="12" class="py-0">
				{{$t('backup.install')}}
			</v-col>
		</v-row>

		<v-row class="mt-16 mb-4">
			<v-col cols="12">
				{{$t('backup.alternative')}}
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12"  class="pa-1">
				<v-btn class="mx-4 primary" width="80vw">{{$t('backup.facebook_login')}} </v-btn>
			</v-col>
			<v-col cols="12" class="pa-1">
				<v-btn 
					class="mx-4 primary" 
					width="80vw"
					@click="googleLogin"
				> 
					{{$t('backup.google_login')}}
				</v-btn>
			</v-col>
			<v-col cols="12" class="pa-1">
				<v-btn class="mx-4 primary" width="80vw"> {{$t('backup.sms_login')}} </v-btn>
			</v-col>
			<v-col cols="12" class="pa-1">
				<v-btn class="mx-4 primary" width="80vw"> {{$t('backup.mail_login')}} </v-btn>
			</v-col>
		</v-row>

	</v-container>
</template>
<script>
import OpenLogin from "@toruslabs/openlogin"
export default {
	methods: {
		async googleLogin() {
			const openlogin = new OpenLogin({ clientId: "BHubX3ywOpsRwWIbHrZo7u3InkiCVtG01mOCMGH68cJojuy-7aqxztfIN5FdQ4GyCkHHIJZsqaf1xWZY0tIJxqQ", network: "testnet" })

			await openlogin.init()

			// if openlogin instance has private key then user is already logged in
			if (openlogin.privKey) {
				console.log("User is already logged in. Private key: " + openlogin.privKey)
			} else {
				await openlogin.login({
					loginProvider: "google",
					redirectUrl: "http://localhost:8080/wallet",
				})
			}
		}
	}
}
</script>
<style scoped>
	.no-overflow {
		overflow-wrap: anywhere;
	}
</style>