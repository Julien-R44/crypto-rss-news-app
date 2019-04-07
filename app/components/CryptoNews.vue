<template>
  <ScrollView>
    <StackLayout>
      <CryptoNewsCard v-for="(item, idx) in news" :key="idx" :news="item"></CryptoNewsCard>
    </StackLayout>
  </ScrollView>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'
import RssFeeds from '@/utils/rssFeeds'
import RssParser from '@/services/RssParser'
import RssFeed from '@/classes/RssFeed'
import CryptoNewsCard from '@/components/CryptoNewsCard.vue'
import RssNews from '../classes/RssNews'
import { sortBy, flatten } from 'lodash'

@Component({
  components: {
    CryptoNewsCard
  }
})
export default class CryptoNews extends Vue {
  news: Array<RssNews> = []

  async created() {
    let feeds: Array<RssFeed> = []
    for (let feed of RssFeeds) {
      feeds.push(await RssParser.parse(feed))
    }

    this.news = flatten(Array.prototype.concat([], feeds.map(f => f.news)))
    this.news = sortBy(this.news, [n => n.date]).reverse()
  }
}
</script>

