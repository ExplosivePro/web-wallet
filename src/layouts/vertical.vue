<template>
  <v-app>
    <the-appbar :isVertical="true"/>
    <the-tabs/>

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary overflow-x-hidden">

      <!-- Provides the application the proper gutter -->
      <v-container>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
  import theAppbar from './components/appbar'
  import theTabs from './components/tabs'
  import theFooter from './components/footer'

  export default {
    components: {
      theAppbar,
      theTabs,
      theFooter
    }
  } 
</script>