import VueCodeBlock from './lib/vue-code-block.vue'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'

export default {
  install(Vue, options) {
    Vue.use(VueClipboard)
    Vue.use(Toasted)
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('code-block', VueCodeBlock)
  },
}
