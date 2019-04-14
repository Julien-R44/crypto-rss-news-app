import axios from 'axios'
import CryptoCurrency from '~/classes/CryptoCurrency'
import { map, find } from 'lodash'

const debug = process.env.NODE_ENV !== 'production'
const debugApiBaseUrl = 'https://sandbox-api.coinmarketcap.com'
const prodApiBaseUrl = 'https://pro.coinmarketcap.com/'

const $axios = axios.create({
  baseURL: debug ? debugApiBaseUrl : prodApiBaseUrl,
  headers: {
    'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
    'Content-Type': 'application/json',
    'Accept-Encoding': 'deflate, gzip'
  }
})

export abstract class CmcApi {
  public static async fetchCryptoCurrencies(): Promise<Array<CryptoCurrency>> {
    const { data } = await $axios.get(
      'v1/cryptocurrency/listings/latest?limit=20&convert=EUR'
    )

    const cryptosIds: Array<Number> = map(data.data, 'id')
    const { data: metaData } = await $axios.get(
      `/v1/cryptocurrency/info?id=${cryptosIds}`
    )

    let cryptos: Array<CryptoCurrency> = []
    for (let crypto of data.data) {
      const metaDataOfCrypto = find(metaData.data, d => d.id === crypto.id)
      cryptos.push(new CryptoCurrency({ ...crypto, ...metaDataOfCrypto }))
    }

    return cryptos
  }
}

export default CmcApi
