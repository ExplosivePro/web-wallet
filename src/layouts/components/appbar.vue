<template>
	<div>
		<!-- App Bar -->
		<v-app-bar
			app
			:color="option.backColor"
			dark
		>
			
			<v-spacer>
				<div class="d-flex flex-start">
					<v-img
						alt="Logo"
						contain
						:src="`/static/${logo.file}`"
						position="left center"
						:height="logo.height"
						:width="logo.width"
					/>
				</div>
				
			</v-spacer>
			
			<v-toolbar-title
				description = "title"
			>{{$store.state.title}}</v-toolbar-title>
			
			<v-spacer
				class="d-flex flex-row-reverse"
			>
				<v-app-bar-nav-icon 
					@click="opened = !opened"
					:color="option.color"
				></v-app-bar-nav-icon>
			</v-spacer>


		</v-app-bar>

		<!-- Drawer -->
		<v-navigation-drawer
			v-model = "opened"
			left
			temporary
			overlay-color="#2E1D59"
			overlay-opacity=0.8
			app
			fixed
		>
			<v-list-item>
				<v-list-item-content>
					<div class="d-flex align-center">
						<v-img
							alt="Logo"
							class="shrink mr-2"
							contain
							:src="`/static/${logo.file}`"
							transition="appear-transition"
							height="40"
							position="left center"
						/>
					</div>
				</v-list-item-content>
			</v-list-item>

			<v-list
				dense
			>
				<v-list-item
					v-for="item in navigation"
					:key="item.title"
					link
					:to="item.link"
					active-class="primary--text"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon ? item.icon : 'mdi-domain'}}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<template v-slot:append>
				<div class="pa-2">
					<v-btn block
						@click="handleBackup"
					>
						Backup
					</v-btn>
				</div>
			</template>
		</v-navigation-drawer>
	</div>
</template>
<script>
	import config from '@/config.json'
	import OpenLogin from "@toruslabs/openlogin";
	
	export default {
		data: function() {
			var theme = config.theme
			var currentTheme =require(`@/themes/${theme}.json`)
			currentTheme.logo.height = currentTheme.logo.height ? currentTheme.logo.height: 30
			currentTheme.logo.width = currentTheme.logo.width ? currentTheme.logo.width: 50
			return {
				opened: false,
				logo: currentTheme.logo,
				option: currentTheme.header,
				navigation: config.navigation
			} 
		},
		methods: {
			async handleBackup() {
				const openlogin = new OpenLogin({ clientId: "BHubX3ywOpsRwWIbHrZo7u3InkiCVtG01mOCMGH68cJojuy-7aqxztfIN5FdQ4GyCkHHIJZsqaf1xWZY0tIJxqQ", network: "testnet" });

				await openlogin.init();

				// if openlogin instance has private key then user is already logged in
				if (openlogin.privKey) {
					console.log("User is already logged in. Private key: " + openlogin.privKey);
				} else {
					await openlogin.login({
						loginProvider: "google",
						redirectUrl: "http://localhost:8081/wallet",
					});
				}

			}
		},
	}
</script>