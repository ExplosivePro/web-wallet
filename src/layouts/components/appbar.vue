<template>
	<div>
		<!-- App Bar -->
		<v-app-bar
			app
			:color="option.backColor"
			dark
		>
			<div class="d-flex flex-start">
				<v-img
					alt="Logo"
					contain
					:src="`/static/${logo}`"
					height="30"
					max-width="50"
					position="left center"
				/>
			</div>
			
			<v-spacer></v-spacer>
			
			<v-toolbar-title
			>{{$store.state.title}}</v-toolbar-title>
			
			<v-spacer></v-spacer>

			<v-app-bar-nav-icon 
				@click="opened = !opened"
				:color="option.color"
			></v-app-bar-nav-icon>

		</v-app-bar>

		<!-- Drawer -->
		<v-navigation-drawer
			v-model = "opened"
			left
			absolute
			temporary
			overlay-color="#2E1D59"
			overlay-opacity=0.8
		>
			<v-list-item>
				<v-list-item-content>
					<div class="d-flex align-center">
						<v-img
							alt="Enjin"
							class="shrink mr-2"
							contain
							:src="`/static/${logo}`"
							transition="appear-transition"
							height="40"
							position="left center"
						/>
					</div>
				</v-list-item-content>
			</v-list-item>

			<v-list
				dense
				nav
			>
				<v-list-item
					v-for="item in navigation"
					:key="item.title"
					link
					:to="item.link"
					active-class="primary--text"
				>
				<!--  -->
					<v-list-item-icon>
						<v-icon>{{ item.icon ? item.icon : 'mdi-domain'}}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
<script>
	import {theme, navigation, currentTheme} from '@/config.json'

	export default {
		data: function() {
			return {
				opened: false,
				logo: theme[currentTheme].logo,
				option: theme[currentTheme].header,
				navigation,
			} 
		}
	}
</script>