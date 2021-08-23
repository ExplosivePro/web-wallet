<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div
          :class="[`text-h4`, `mt-1`, `purple--text`, `text--darken-6`]"
          text="wallet"
        >
          {{$t('wallet.title')}}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <apollo-query
        :query="require('./gql/getOverview.gql')"
        clientId="enjinx"
        class="col-12 pa-0"
      >
        <template v-slot="{ result: { error, data }, isLoading }">
          <div v-if="isLoading" class="loading apollo">Loading...</div>

          <overview-list-item
            v-else-if="error"
            v-for="item in demo"
            :key="item.chain"
            :data = "item"
          />

          <overview-list-item
            v-else-if="data"
            v-for="item in data"
            :key="item.chain"
            :data = "item"
          />
 
          <div v-else class="no-result apollo">No result :(</div>
        </template>
      </apollo-query>

    </v-row>
  </v-container>
</template>

<script>
  import OverviewListItem from './components/OverviewListItem'

  export default {
    components: {
      OverviewListItem
    },

    data: function() {
      return {
        items: [
          'web', 'shopping', 'videos', 'images', 'news',
        ],
        demo: [
          {
            "chain": "BTC",
            "addresses": [
              {
                "address": "3828uLnVCCUwWdBEw8u3pARXoFUVZu7eH7",
                "balances": [
                  {
                    "id": "bitcoin",
                    "balance": "0",
                    "price": null
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    created: function () {
      this.$store.commit('setTitle', this.$t('wallet.title'))
    },
  }
</script>
