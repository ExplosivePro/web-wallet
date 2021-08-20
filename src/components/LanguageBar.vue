<template>
	<v-menu v-model="languageMenu" offset-y>
		<template v-slot:activator="{ on, attrs }">
			<v-btn class="text-capitalize px-0" v-bind="attrs" v-on="on" text>
				<v-icon left>mdi-translate</v-icon>
				{{ activeLang }}
				<v-icon small right>mdi-menu-down</v-icon>
			</v-btn>
		</template>
		<v-list dense>
			<v-list-item v-for="(lang, index) in langs" :key="index" @click="handleMenuItemClick(lang)">
				<v-list-item-title>{{ lang.title }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>
<script>
	export default {
		data: function() {

			let langs = [
				{ title: 'English', key: 'en' },
				{ title: 'русский', key: 'ru' },
				{ title: '中文', key: 'ch' }
			]

			let activeLang = langs.find(item=>item.key === this.$i18n.locale).title

			return {
				langs: langs,
				activeLang: activeLang,
				languageMenu: false,
			} 
		},
		methods: {
			handleMenuItemClick (lang) {
				this.activeLang = lang.title
				this.$i18n.locale = lang.key
				localStorage.setItem("lang", lang.key)
			}
		}
	}
</script>
