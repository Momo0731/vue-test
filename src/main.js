import Vue from 'vue'
import './app/css/docs.css'
import App from 'COMPONENTS/App'
import router from 'ROUTERS/'
import store from 'STORE/store'
import './filters/'
import 'babel-polyfill'



Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

})
