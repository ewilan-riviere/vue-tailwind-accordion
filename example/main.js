import Vue from 'vue'
import App from './App.vue'
import VueCodeBlock from '../index'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'

import './css/air.css'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Toasted)
Vue.use(VueCodeBlock, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
