<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div
          :class="[`text-h4`, `mt-1`, `purple--text`, `text--darken-6`]"
          text="wallet"
        >
          {{$t('wallet.asset')}}
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
  import assetListItem from '../components/assetListItem'

  export default {
    components: {
      assetListItem
    },
    computed: mapState({
      assets: state => state.wallet.assets
    }),

    methods: {
      ...mapActions({
        getAssets: 'wallet/getAssets'
      })
    },
    mounted: function() {
      this.getAssets()
    }
  }
</script>
