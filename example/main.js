import Vue from 'vue'
import App from './App.vue'
import VueTailwindAccordion from '../index'

import '../lib/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueTailwindAccordion, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
