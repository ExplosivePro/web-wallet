<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <div
          :class="[`text-h4`, `mt-1`, `purple--text`, `text--darken-6`]"
          text="contacts"
        >
          {{$t('contacts.title')}}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="8" offset-md="2">
        <v-card>
          <v-card-title>
            <v-text-field
              append-icon="mdi-magnify"
              :outlined="false"
              :placeholder="$t('contacts.search')"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
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
      contacts: state => state.contacts.data
    }),

    methods: {
      ...mapActions({
        getBulk: 'contacts/getContacts'
      })
    },
    mounted: function() {
      this.getBulk()
    }
  }
</script>
