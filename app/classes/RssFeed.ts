import RssNews from './RssNews'

export default class RssFeed {
  public news: Array<RssNews> = []

  // Real RSS parser needed here.
  constructor(data) {
    for (let news of data.rss.channel.item) {
      let imgPath: string = ''
      if (news['media:thumbnail'])
        imgPath = news['media:thumbnail']._attributes.url
      else if (news.enclosure && news.enclosure._attributes)
        imgPath = news.enclosure._attributes.url

      const instance = new RssNews(
        data.rss.channel.title._text,
        news.title._text,
        imgPath,
        new Date(news.pubDate._text),
        news.link._text
      )
      this.news.push(instance)
    }
  }
}
