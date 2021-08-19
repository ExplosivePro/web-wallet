<template>
	<v-navigation-drawer
		:opened = "opened"
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
</template>
<script>
	export default {
		props: ['opened', 'logo', 'navigation', 'handleBackup'],
	}
</script>