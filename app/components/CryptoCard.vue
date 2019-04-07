<template>
  <StackLayout>
    <Image :src="crypto.logo"/>
    <Label>{{ crypto.name }}</Label>
  </StackLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'
import { CryptoCurrency } from '@/classes/CryptoCurrency'

@Component
export default class App extends Vue {
  @Prop(CryptoCurrency) readonly crypto!: CryptoCurrency
}
</script>

