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
				class="d-flex flex-row-reverse align-center"
			>
				<v-app-bar-nav-icon
					v-if="!isVertical"
					@click="toggleDrawer"
					:color="option.color"
				></v-app-bar-nav-icon>

			</v-spacer>
		</v-app-bar>

		<!-- Drawer -->
		<v-navigation-drawer
			v-if="!isVertical"
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
						{{$t('backup.title')}}
					</v-btn>
				</div>
			</template>
		</v-navigation-drawer>

	</div>
</template>
<script>

	import config from '@/config.json'
	import baseThemeConfig from '@/themes/base.json'
	
	export default {
		props: ['isVertical'],
		data: function() {
			var theme = config.theme
			var themeConfig = {
				...baseThemeConfig,
				...require(`@/themes/${theme}.json`)
			}
			return {
				opened: false,
				logo: themeConfig.logo,
				option: themeConfig.header,
				navigation: config.navigation,
				dialog: false
			} 
		},
		methods: {
			async handleBackup() {
				this.$router.push('/backup');
			},
			toggleDrawer() {
				this.opened = !this.opened
			}
		},
	}
</script>