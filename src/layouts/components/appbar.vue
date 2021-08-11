<template>
	<div>
		<!-- App Bar -->
		<v-app-bar
			app
		>
			<div class="d-flex align-center">
				<v-img
					alt="Enjin"
					class="shrink mr-2"
					contain
					:src="require('@/assets/logo.svg')"
					transition="scale-transition"
					width="140"
				/>
			</div>

			<v-spacer></v-spacer>
			
			<v-app-bar-nav-icon @click="opened = !opened"></v-app-bar-nav-icon>

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
							:src="require('@/assets/logo.svg')"
							transition="appear-transition"
							width="140"
						/>
					</div>
				</v-list-item-content>
			</v-list-item>

			<v-list
				dense
				nav
			>
				<v-list-item
					v-for="item in config.navigation"
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
	import config from '../config'
	export default {
		data: function() {
			return {
				opened: false,
				config
			} 
		}
	}
</script>