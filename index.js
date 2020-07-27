import VueCodeBlock from './lib/vue-code-block.vue'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'

export default {
  install(Vue, options, isServer) {
    Vue.use(VueClipboard)
    Vue.use(Toasted)
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('code-block', VueCodeBlock)

    // to avoid rerror when build cause by vue-toast
    // to avoid rerror when build cause by vue-toast
    if (!isServer) {
      import('vue-toasted' /* webpackChunkName: "notification" */).then(
        (module) => {
          Vue.use(module.default)
        }
      )
    }
  },
}
