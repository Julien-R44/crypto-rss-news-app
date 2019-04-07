export class CryptoCurrency {
  name: string
  symbol: string
  price: number
  logo: string
  percentChange1h: number
  percentChange24h: number
  percentChange7d: number
  constructor(data) {
    this.name = data.name
    this.symbol = data.symbol
    this.logo = data.logo
    this.price = data.quote.EUR.price
    this.percentChange1h = data.quote.EUR.percent_change_1h
    this.percentChange24h = data.quote.EUR.percent_change_24h
    this.percentChange7d = data.quote.EUR.percent_change_7d
  }
}
