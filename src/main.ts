import { createApp } from "vue";
import "./style.sass";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
