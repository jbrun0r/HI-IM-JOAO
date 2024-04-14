import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import VueFeather from "vue-feather";
import "@/assets/main.css";
import "primevue/resources/primevue.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(ToastService)
  .use(VueQueryPlugin)
  .component(VueFeather.name, VueFeather);

app.mount("#app");
