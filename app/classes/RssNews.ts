export default class RssNews {
  channel: string
  title: string
  imgUrl: string
  date: Date
  link: string
  constructor(
    channel: string,
    title: string,
    imgUrl: string,
    date: Date,
    link: string
  ) {
    this.channel = channel
    this.title = title
    this.imgUrl = imgUrl
    this.date = date
    this.link = link
  }
}
