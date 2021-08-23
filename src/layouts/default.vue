<template>
  <v-app>
    <the-appbar />

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary overflow-x-hidden">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
  import theAppbar from './components/appbar'
  import theFooter from './components/footer'

  export default {
    components: {
      theAppbar,
      theFooter
    },
    data: function () {
      return {
      }
    },
    methods: {
    }
  } 
</script>