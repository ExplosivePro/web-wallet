<template>
  <v-app>
    <default-appbar />

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <default-footer />
  </v-app>
</template>

<script>
  import defaultAppbar from './appbar'
  import defaultFooter from './footer'

  export default {
    components: {
      defaultAppbar,
      defaultFooter
    },
    data: function () {
      return {
      }
    },
    methods: {
    }
  } 
</script>