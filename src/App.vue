<template>
  <app-layout>
  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/index'
import logger from '@/helpers/logger.js'

export default {
  name: 'App',

  components : {
    AppLayout
  },
  data: () => ({
  }),
  created() {
    if (localStorage.getItem('wallet-key')) {
      this.$store.commit('setRole', 'user')
    }
  },
  mounted() {
    logger.setBodyStyle({ color: 'red' });
    logger.log(this.$t('warning_msg'));
  }
};
</script>
