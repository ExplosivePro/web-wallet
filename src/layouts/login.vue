<template>
  <v-app>

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary">

      <!-- Provides the application the proper gutter -->
      <v-container fluid
        style="height:100vh"
      >

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>