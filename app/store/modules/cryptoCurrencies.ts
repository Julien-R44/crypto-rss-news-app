import CmcApi from '~/services/CmcApi'

const cryptoCurrencies = {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    }
  },
  actions: {
    async fetch(store) {
      const cryptos = await CmcApi.fetchCryptoCurrencies()

      store.commit('SET_ITEMS', cryptos)
    }
  },
  getters: {
    items: state => state.items
  }
}

export default cryptoCurrencies
