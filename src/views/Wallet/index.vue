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
        <overview-list-item
          v-for="item in overview"
          :key="item.chain"
          :data = "item"
        />
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import OverviewListItem from './components/OverviewListItem'

  export default {
    components: {
      OverviewListItem
    },

    computed: mapState({
      overview: state => state.wallet.overview
    }),

    methods: {
      ...mapActions({
        getOverview: 'wallet/getOverview'
      })
    },
    created: function () {
      this.$store.commit('setTitle', this.$t('wallet.title'))
    },
    mounted: function() {
      this.getOverview()
    }
  }
</script>
