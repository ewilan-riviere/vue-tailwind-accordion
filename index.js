import VueTailwindAccordion from './lib/vue-tailwind-accordion.vue'

export default {
  install(Vue, options) {
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('tailwind-accordion', VueTailwindAccordion)
  },
}
