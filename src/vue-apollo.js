import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client'
import {createHttpLink} from "@apollo/client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { setContext } from '@apollo/client/link/context'

// Install the vue plugin
Vue.use(VueApollo)

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token'

// Http endpoint
const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost/graphql'
// Files URL root
export const filesRoot = process.env.VUE_APP_FILES_ROOT || httpEndpoint.substr(0, httpEndpoint.indexOf('/graphql'))

Vue.prototype.$filesRoot = filesRoot

// Config
const defaultOptions = {
  httpEndpoint,
  tokenName: AUTH_TOKEN,
  persisting: false,
  websocketsOnly: false,
  ssr: false,
}

const clientOption = setContext(async (_, {headers}) => {
    return {
        headers: {
            ...headers,
            'Access-Control-Allow-Origin': '*'
        },
    }
})

function generateClients(client_urls = ['contacts']) {
  let clients = {}

  for (let i = 0; i < client_urls.length; i++) {
    const item = client_urls[i]
    const clientLink = createHttpLink({
        uri: `${httpEndpoint}/${item}`
    })

    const client = createApolloClient({
      ...defaultOptions,
      link: clientOption.concat(clientLink),
      cache: new InMemoryCache(),
    });

    clients[item] = client.apolloClient
  }
  return clients
}



// Call this in the Vue app file
export function createProvider () {

  let client_urls = ['enjinx', 'contacts', 'overview']
  let clients = generateClients(client_urls)
  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    clients: {
      ...clients,
      default: clients[0]
    },
    defaultClient: clients[0],
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient)
  try {
    await apolloClient.resetStore()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}

const apollo = createProvider();
export default apollo