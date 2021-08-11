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
      <v-col sm="12" md="8" offset-md="2">
        <v-card
          v-for="item in assets"
          :key="item.id"
          class="mb-8 py-2 px-2"
        >
          <v-row>
            <v-col cols="6">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="item.metadata.image"
              ></v-img>
            </v-col>
            <v-col cols="6" align-self="center">
              {{item.metadata.name}}
            </v-col>

          </v-row>
        </v-card>
        <v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    
    computed: mapState({
      assets: state => state.wallet.assets
    }),

    methods: {
      ...mapActions({
        getAssets: 'wallet/getAssets'
      })
    },
    mounted: function() {
      console.log(this.assets)
      this.getAssets()
    }
  }
</script>
