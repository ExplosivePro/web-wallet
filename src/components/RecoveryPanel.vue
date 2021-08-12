<template>
	<v-combobox
		v-model="model"
		:filter="filter"
		:hide-no-data="!search"
		:items="items"
		:search-input.sync="search"
		hide-selected
		label="Search for an option"
		multiple
		small-chips
		solo
		height="300"
	>
		
		<template v-slot:selection="{ attrs, item, parent, selected }">
			<v-chip
				v-if="item === Object(item)"
				v-bind="attrs"
				:color="`purple lighten-3`"
				:input-value="selected"
				label
				small
			>
				<span class="pr-2">
					{{ item.text }}
				</span>
				<v-icon
					small
					@click="parent.selectItem(item)"
				>
					$delete
				</v-icon>
			</v-chip>
		</template>
	</v-combobox>
</template>
<script>
export default {
	data: () => ({
		items: [],
		model: [],
		x: 0,
		search: null,
		y: 0,
	}),

	watch: {
		model (val, prev) {
			if (val.length === prev.length) return

			this.model = val.map(v => {
				if (typeof v === 'string') {
					v = {
						text: v,
					}

					this.items.push(v)
				}

				return v
			})
		},
	},

	methods: {
		filter (item, queryText, itemText) {
			if (item.header) return false

			const hasValue = val => val != null ? val : ''

			const text = hasValue(itemText)
			const query = hasValue(queryText)

			return text.toString()
				.toLowerCase()
				.indexOf(query.toString().toLowerCase()) > -1
		},
	},
}
</script>
<style scope>
.mdi-menu-down::before {
	content:'' !important;
}
div[role=combobox] {
  align-items: flex-start;
  padding: 1em !important;
}
</style>