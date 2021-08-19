<template>
  <v-app>
    <enjin-appbar />

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary overflow-x-hidden">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <enjin-footer />
  </v-app>
</template>

<script>
  import enjinAppbar from './components/appbar'
  import enjinFooter from './components/footer'

  export default {
    components: {
      enjinAppbar,
      enjinFooter
    },
    data: function () {
      return {
      }
    },
    methods: {
    }
  } 
</script>