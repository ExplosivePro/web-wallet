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
      <apollo-query
        :query="require('./gql/getAssetsBulk.gql')"
        :variables="{ 'dictionary':[] }"
        clientId="enjinx"
        class="col-12 pa-0"
      >
        <template v-slot="{ result: { error, data }, isLoading }">
          <div v-if="isLoading" class="loading apollo">Loading...</div>

          <asset-list-item
            v-else-if="error"
            v-for="item in demo"
            :key="item.id"
            :data = "item"
          />

          <asset-list-item
            v-else-if="data"
            v-for="item in data"
            :key="item.id"
            :data = "item"
          />

          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </apollo-query>
    </v-row>
  </v-container>
</template>

<script>
  import AssetListItem from './components/AssetListItem'

  export default {
    components: {
      AssetListItem
    },
    
    data: function () {
      return {
        demo: [
          {
            "id": "00000000000001b8",
            "metadata": {
              "name": "Stormy Knights Cover",
              "image": "https://cdn.enjinx.io/metadata/raw/1c638f11049314974473e0f96493de3d66146162/f3e338ca66c7f3dc9e88f494e15ae2e8ccdbd434.png"
            },
          },
          {
            "id": "00000000000001fe",
            "metadata": {
              "name": "WoC Early Access Badge (Limited Edition)",
              "image": "https://cdn.enjinx.io/metadata/raw/f99197b2623b16c72cb7bdf55cc229b0bd3ffde5/6b7827fea67987f08455f91d0bc276f8893761ef.png"
            }
          }
        ] 
      }
    },

    created: function () {
      this.$store.commit('setTitle', this.$t('assets.title'))
    }
  }
</script>
