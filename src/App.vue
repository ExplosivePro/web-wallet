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
  created() {
    if (localStorage.getItem('wallet-key')) {
      this.$store.commit('setRole', 'user')
    }

    this.$i18n.locale = localStorage.lang ? localStorage.lang : 'en' 
  },
  mounted() {
    logger.setStyle({ color: 'white', backColor: '#f00', size: "2rem" })
    logger.log(this.$t('warning.title'))
    logger.setStyle({ color: '#222', backColor: '#fff', size: "  1.5rem" })
    logger.log(this.$t('warning.content'))
  }
};
</script>
