import { shallowMount } from '@vue/test-utils'
import HomeComponent from '@/views/Home.vue'

describe('Home.vue', () => {
  const Home = (data = {}, props = {}) => {
    return shallowMount(HomeComponent, {
      data: () => ({
          ...data,
      }),
      stubs: {
          'v-container': true
      },
      mocks: {
        $store: { commit: () => true },
        $t: key => key
      }
    })
  }
  describe('basic', () => {
      test('set title as Home', () => {
          const home = Home()

          expect(home.text()).toContain("This is home")
      })
  })
})