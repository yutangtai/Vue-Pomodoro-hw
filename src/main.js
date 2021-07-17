import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VAnimateCss from 'v-animate-css'
import router from './router'
import store from './store'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './style/all.stylus'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPause, faRedoAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'sweetalert2/dist/sweetalert2.min.css'
import './registerServiceWorker'

Vue.use(VAnimateCss)
Vue.use(VueSweetalert2)
library.add(faPlay, faPause, faRedoAlt, faPlayCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
