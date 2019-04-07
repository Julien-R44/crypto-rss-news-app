export class CryptoCurrency {
  name: string
  symbol: string
  price: number
  logo: string
  constructor(data) {
    this.name = data.name
    this.symbol = data.symbol
    this.price = data.price
    this.logo = data.logo
  }
}
