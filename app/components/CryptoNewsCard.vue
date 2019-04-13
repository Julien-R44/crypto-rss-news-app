<template>
  <StackLayout @tap="onCardTap" orientation="horizontal" class="crypto-news-card">
    <StackLayout class="crypto-news-card__text">
      <Label class="crypto-news-card__title" textWrap>{{ news.title }}</Label>
      <StackLayout class="crypto-news-card__subhead" orientation="horizontal">
        <Label textWrap :text="`${news.channel} | ${date}`"></Label>
      </StackLayout>
    </StackLayout>
    <Image class="crypto-news-card__image" :src="news.imgUrl" stretch="aspectFit"/>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'
import RssNews from '@/classes/RssNews'
import { format } from '@/utils/dateFnsWrapper'
import WebViewContainer from '@/pages/WebViewContainer.vue'

@Component
export default class CryptoNewsCard extends Vue {
  @Prop(RssNews) readonly news!: RssNews

  get date() {
    return format(this.news.date, 'DD/MM/YYYY')
  }

  onCardTap() {
    this.$navigateTo(WebViewContainer, {
      props: {
        url: this.news.link
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$c: '.crypto-news-card';

#{$c} {
  padding: 40px 50px;
  font-size: 18px;
  font-family: Helvetica Neue;
  font-weight: 200;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgb(126, 126, 126);
  color: rgb(24, 24, 24);
  #{$c}__text {
    width: 70%;
    #{$c}__subhead {
      font-size: 13px;
    }
  }
  #{$c}__image {
    max-width: 20%;
  }
}
</style>
