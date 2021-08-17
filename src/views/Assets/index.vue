<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div
          :class="[`text-h4`, `mt-1`, `purple--text`, `text--darken-6`]"
          text="wallet"
        >
          {{$t('assets.title')}}
        </div>
      </v-col>
    </v-row>
    <v-row>
        <asset-list-item
          v-for="item in assets"
          :key="item.id"
          :data = "item"
        />
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import AssetListItem from './components/AssetListItem'

  export default {
    components: {
      AssetListItem
    },
    computed: mapState({
      assets: state => state.assets.data
    }),

    methods: {
      ...mapActions({
        getAssets: 'assets/getAssets'
      })
    },
    created: function () {
      this.$store.commit('setTitle', this.$t('assets.title'))
    },
    mounted: function() {
      this.getAssets()
    }
  }
</script>
