import VueCodeBlock from './lib/vue-code-block.vue'

export default {
  install(Vue, options) {
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('code-block', VueCodeBlock)
  },
}
