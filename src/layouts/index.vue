<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import config from '@/config.json'
import HorizontalLayout from './horizontal.vue'
import VerticalLayout from './vertical.vue'
import LoginLayout from './login.vue'

const layouts = {
  horizontal: HorizontalLayout,
  vertical: VerticalLayout,
  login: LoginLayout,
}

export default {
  name: "AppLayout",
  data: () => {
    return {
      layout: VerticalLayout
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler(route) {

        if (!route.name) {
          return;
        }
        
        let layout_key = route.meta.layout ? route.meta.layout : config.layout

        this.layout = layouts[layout_key]
      }
    }
  }
}
</script>