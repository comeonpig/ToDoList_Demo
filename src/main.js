import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "vant/lib/index.css";
import { Field, Cell } from "vant";

createApp(App).use(store).use(router).use(Field).use(Cell).mount("#app");
