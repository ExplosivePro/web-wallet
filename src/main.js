import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import apollo from './vue-apollo'

import VueAxios from 'vue-axios'
import axios from 'axios'
import VueAuthenticate from 'vue-authenticate'

Vue.use(VueAxios, axios)

Vue.use(VueAuthenticate, {
  baseUrl: process.env.VUE_APP_SERVER_URL, // Your API domain
  
  providers: {
    google: {
      name: 'google',
      url: '/auth/google',
      clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      redirectUri: process.env.VUE_APP_BASE_URL,
      requiredUrlParams: ['scope'],
      optionalUrlParams: ['display'],
      scope: ['profile', 'email'],
      scopePrefix: 'openid',
      scopeDelimiter: ' ',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: null,
      prompt: 'none'
    },
  }
})

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