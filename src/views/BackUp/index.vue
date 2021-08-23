<template>
	<v-container class="text-center">
		<v-row class="my-4">
			<v-col cols="12">
				{{$t('backup.header')}}
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12">
				{{$t('backup.important')}}
			</v-col>
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
			<v-col cols="12" class="pa-1">
				<v-btn
					v-for="btn in btns"
					:key="btn.label"
					class="mx-4 mt-2 primary" 
					width="80vw"
					@click="btn.handler"
				> 
					{{$t(btn.label)}}
				</v-btn>
			</v-col>
		</v-row>
		<a href="https://accounts.google.com/o/oauth2/v2/auth?response_type=token&access_type=online&client_id=7743242192-sak2hk7i5ioqg8dva6dbnn97qf6iba74.apps.googleusercontent.com&redirect_uri=http://sav.web-wallet.com:8080&scope=email&state&prompt=none">Google</a>

	</v-container>
</template>
<script>
import OpenLogin from "@toruslabs/openlogin"
export default {
	data() {
		return {
			btns: [
				{
					label: 'backup.facebook_login'	
				},
				{
					handler: () => this.authenticate('google'),
					label: 'backup.google_login'	
				},
				{
					label: 'backup.sms_login'	
				},
				{
					label: 'backup.mail_login'	
				}
			],
			privKey: "",
			verifier: {
				clientId: process.env.VUE_APP_TORUS_CLIENT_ID ? process.env.VUE_APP_TORUS_CLIENT_ID: "BHubX3ywOpsRwWIbHrZo7u3InkiCVtG01mOCMGH68cJojuy-7aqxztfIN5FdQ4GyCkHHIJZsqaf1xWZY0tIJxqQ",
				loginProvider: "google",
			}
		}
	},
	methods: {
		authenticate: function (provider) {
			console.log(provider)
			const testURL = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=token&access_type=online&client_id=7743242192-sak2hk7i5ioqg8dva6dbnn97qf6iba74.apps.googleusercontent.com&redirect_uri=http://sav.web-wallet.com:8080/backup&scope=email&state&prompt=none';
			const myInit = {
				method: 'HEAD',
				mode: 'no-cors',
			}

			const myRequest = new Request(testURL, myInit);

			fetch(myRequest).then(function(response) {
				console.log(response.text());
				console.log(response.url);
				console.log(response.json());
				return response;
			}).then(function(response) {
				console.log(response);
			}).catch(function(e){
				console.log(e);
			});
		}
		// async googleLogin() {
		// 	await this.sdk.login({
		// 		loginProvider: this.verifier.loginProvider,
		// 		redirectUrl: "http://localhost:8080/wallet"
		// 	})
		// }
	},
	async mounted() {

		console.log(this.$router)
		if (this.sdk) return

		this.sdk = new OpenLogin({
			clientId: this.verifier.clientId,
			network: "testnet"
		})

		await this.sdk.init()

		if (this.sdk.privKey) {
			console.log("Private Key", this.sdk.privKey)
		}
	}
}
</script>
<style scoped>
	.no-overflow {
		overflow-wrap: anywhere;
	}
</style>