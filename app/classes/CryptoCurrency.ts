export default class CryptoCurrency {
  name: string
  symbol: string
  price: number
  logo: string
  percentChange1h: number
  percentChange24h: number
  percentChange7d: number
  volume24h: number
  circulatingSupply: number
  marketCap: number
  tags: Array<String>
  rank: number
  description: string
  constructor(data) {
    this.name = data.name
    this.logo = data.logo
    this.tags = data.tags
    this.rank = data.cmc_rank
    this.symbol = data.symbol
    this.description = data.description
    this.circulatingSupply = data.circulating_supply

    const currencyQuote = data.quote.EUR
    this.percentChange1h = currencyQuote.percent_change_1h
    this.percentChange24h = currencyQuote.percent_change_24h
    this.percentChange7d = currencyQuote.percent_change_7d
    this.volume24h = currencyQuote.volume_24h
    this.marketCap = currencyQuote.market_cap
    this.price = currencyQuote.price
  }

  get roundedPrice() {
    const fixedPrice = +this.price.toFixed(2)
    return `${fixedPrice} €`
  }
}
