<template>
  <StackLayout @tap="onCardtap" class="crypto-card">
    <FlexboxLayout class="crypto-card-headline">
      <StackLayout orientation="horizontal">
        <Image class="crypto-card-headline__logo" :src="crypto.logo" stretch="none"/>
        <Label class="crypto-card-headline__symbol" :text="crypto.symbol"></Label>
        <Label text=" | "></Label>
        <Label class="crypto-card-headline__name" :text="crypto.name"></Label>
      </StackLayout>

      <Label>{{ crypto.roundedPrice }}</Label>
    </FlexboxLayout>

    <FlexboxLayout class="crypto-card-subhead">
      <Label>
        <FormattedString>
          <Span text="1h: "></Span>
          <Span
            :class="stylePercentChange(crypto.percentChange1h)"
            :text="`${crypto.percentChange1h} €`"
          ></Span>
        </FormattedString>
      </Label>
      <Label>
        <FormattedString>
          <Span text="24h: "></Span>
          <Span
            :class="stylePercentChange(crypto.percentChange24h)"
            :text="`${crypto.percentChange24h} €`"
          ></Span>
        </FormattedString>
      </Label>
      <Label>
        <FormattedString>
          <Span text="7d: "></Span>
          <Span
            :class="stylePercentChange(crypto.percentChange7d)"
            :text="`${crypto.percentChange7d} €`"
          ></Span>
        </FormattedString>
      </Label>
    </FlexboxLayout>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'
import CryptoCurrency from '@/classes/CryptoCurrency'
import CryptoDetails from '@/components/CryptoDetails.vue'

@Component
export default class App extends Vue {
  @Prop(CryptoCurrency) readonly crypto!: CryptoCurrency

  stylePercentChange(value) {
    return value > 0 ? 'green' : 'red'
  }

  onCardtap() {
    this.$navigateTo(CryptoDetails, {
      props: {
        crypto: this.crypto
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.crypto-card {
  font-size: 18px;
  font-family: Helvetica Neue;
  font-weight: 200;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: rgb(126, 126, 126);
  color: rgb(24, 24, 24);
  padding: 40px 50px;
  .crypto-card-headline {
    justify-content: space-between;
    padding-bottom: 50px;
    &__symbol {
      font-weight: 400;
    }
    &__name {
      font-weight: 200;
    }
    &__logo {
      margin-right: 30px;
    }
  }

  .crypto-card-subhead {
    justify-content: space-between;
    font-size: 14px;
    .green {
      color: #00bfa5;
    }
    .red {
      color: #de3309;
    }
  }
}
</style>


