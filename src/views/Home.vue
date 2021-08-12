<template>
  <v-container>
    This is home
  </v-container>
</template>

<script>
  export default {
    created: function () {
      this.$store.commit('setTitle', this.$t('home'))
    }
  }
</script>
