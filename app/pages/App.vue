<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Crypto-App"></Label>
    </ActionBar>

    <TabView androidTabsPosition="bottom">
      <TabViewItem title="Market">
        <ScrollView>
          <StackLayout>
            <CryptoCard v-for="(item, idx) in items" :key="idx" :crypto="item"></CryptoCard>
          </StackLayout>
        </ScrollView>
      </TabViewItem>

      <TabViewItem title="News">
        <CryptoNews></CryptoNews>
      </TabViewItem>
    </TabView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'
import CryptoCard from '@/components/CryptoCard.vue'
import CryptoNews from '@/components/CryptoNews.vue'

@Component({
  components: {
    CryptoCard,
    CryptoNews
  }
})
export default class App extends Vue {
  created() {
    this.$store.dispatch('CryptoCurrencies/fetch')
  }

  get items() {
    return this.$store.getters['CryptoCurrencies/items']
  }
}
</script>
