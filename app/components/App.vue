<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Crypto-App"></Label>
    </ActionBar>

    <ScrollView>
      <StackLayout>
        <CryptoCard v-for="(item, idx) in items" :key="idx" :crypto="item"></CryptoCard>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component } from 'vue-property-decorator'
import CryptoCard from '@/components/CryptoCard.vue'

@Component({
  components: {
    CryptoCard
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

<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
