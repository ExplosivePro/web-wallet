import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import apollo from './vue-apollo'

Vue.config.productionTip = false
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  apolloProvider: apollo,
  render: h => h(App)
}).$mount('#app')