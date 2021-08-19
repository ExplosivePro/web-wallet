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
    <apollo-query
      :query="require('./gql/getContacts.gql')"
      :variables="{ 'dictionary':[{
        'id': 'Savinkin'
      }] }"
      clientId="contacts"
      class="col-12 pa-0"
    >
      <template v-slot="{ result: { error, data }, isLoading }">
        <div v-if="isLoading" class="loading apollo">Loading...</div>
        <div
          v-else-if="error"
        >
          Error
        </div>

        <div
          v-else-if="data"
        >
          <p
            v-for="item in data.Contacts"
            :key="item.id"
          >{{item.data}}</p>
        </div>

        <div v-else class="no-result apollo">No result :(</div>
      </template>
      
    </apollo-query>
    
  </v-container>
</template>

<script>
  export default {
    
    created: function () {
      this.$store.commit('setTitle', this.$t('contacts.title'))
    },
  }
</script>
