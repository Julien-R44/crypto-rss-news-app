import Vue from 'nativescript-vue'
import App from './components/App.vue'
import store from './store'

Vue.config.silent = false

new Vue({
  render: h => h('frame', [h(App)]),
  store
}).$start()
