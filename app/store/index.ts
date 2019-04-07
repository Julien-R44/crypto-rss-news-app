import Vue from 'nativescript-vue'
import Vuex from 'vuex'

import CryptoCurrencies from './modules/cryptoCurrencies'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    CryptoCurrencies
  }
})

export default store
