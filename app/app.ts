import Vue from "nativescript-vue";
// @ts-ignore
import Home from "./components/Home.vue";

new Vue({
  template: `
        <Frame>
            <Home />
        </Frame>`,

  components: {
    Home
  }
}).$start();
