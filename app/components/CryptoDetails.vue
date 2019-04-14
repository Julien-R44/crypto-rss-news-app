<template>
  <Page class="p-crypto-details">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" :text="crypto.symbol"></Label>
    </ActionBar>

    <ScrollView>
      <StackLayout>
        <StackLayout class="p-crypto-details__description">
          <Label textWrap :text="crypto.description"></Label>
        </StackLayout>
        <StackLayout class="p-crypto-details__table">
          <StackLayout orientation="horizontal" class="p-crypto-details__row--first">
            <StackLayout class="p-crypto-details__column">
              <Label class="p-crypto-details__column-title">Volume (24h)</Label>
              <Label class="p-crypto-details__column-text" :text="volume"></Label>
            </StackLayout>
            <StackLayout class="p-crypto-details__column">
              <Label class="p-crypto-details__column-title">Market cap</Label>
              <Label class="p-crypto-details__column-text" :text="marketCap"></Label>
            </StackLayout>
          </StackLayout>
          <StackLayout orientation="horizontal" class="p-crypto-details__row--last">
            <StackLayout class="p-crypto-details__column">
              <Label class="p-crypto-details__column-title">Rank</Label>
              <Label class="p-crypto-details__column-text" :text="crypto.rank"></Label>
            </StackLayout>
            <StackLayout class="p-crypto-details__column">
              <Label class="p-crypto-details__column-title">Circulating supply</Label>
              <Label class="p-crypto-details__column-text" :text="circulatingSupply"></Label>
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'
import CryptoCurrency from '@/classes/CryptoCurrency'

@Component
export default class CryptoDetails extends Vue {
  @Prop(CryptoCurrency) readonly crypto!: CryptoCurrency

  get circulatingSupply() {
    return `${this.crypto.circulatingSupply} ${this.crypto.symbol}`
  }

  get marketCap() {
    return `€${this.crypto.marketCap}`
  }

  get volume() {
    return `€${this.crypto.volume24h}`
  }
}
</script>

<style lang="scss" scoped>
$c: '.p-crypto-details';

#{$c} {
  font-size: 18px;
  font-family: Helvetica Neue;
  font-weight: 200;
  color: rgb(24, 24, 24);

  #{$c}__description {
    padding: 30px;
    margin-bottom: 50px;
    text-align: center;
    #{$c}__logo {
      margin: auto;
    }
  }

  #{$c}__row--first {
    border-top-style: solid;
    border-top-width: 2px;
    border-top-color: rgb(126, 126, 126);
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: rgb(126, 126, 126);
  }
  #{$c}__row--last {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-bottom-color: rgb(126, 126, 126);
    margin-bottom: 50px;
  }
  #{$c}__column {
    width: 50%;
    border-right-style: solid;
    border-right-width: 2px;
    border-right-color: rgb(126, 126, 126);
    padding: 20px;
    #{$c}__column-title {
      font-size: 13px;
      color: rgb(85, 85, 85);
    }
    #{$c}__column-text {
      font-size: 15px;
    }
  }
}
</style>


