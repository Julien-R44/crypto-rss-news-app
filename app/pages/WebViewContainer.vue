<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Crypto-App"></Label>
    </ActionBar>

    <StackLayout>
      <WebView :src="url"/>
    </StackLayout>
  </Page>
</template>

<script lang='ts'>
import Vue from 'nativescript-vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class WebViewContainer extends Vue {
  @Prop(String) readonly url!: String
  @Prop(String) readonly headerTitle!: String
}
</script>

