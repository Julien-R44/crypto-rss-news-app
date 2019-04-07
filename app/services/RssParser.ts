import axios from 'axios'
import { xml2js } from 'xml-js'
import RssFeed from '~/classes/RssFeed'

export abstract class RssParser {
  public static async parse(feedUrl: string): Promise<RssFeed> {
    const { data } = await axios.get(feedUrl)
    const result = xml2js(data, { compact: true })
    const rssFeed = new RssFeed(result)

    return rssFeed
  }
}

export default RssParser
