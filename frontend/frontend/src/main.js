import { createApp } from "@vue/compat";
import { BootstrapVue } from "bootstrap-vue";
import MainPage from "./pages/main-page.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(MainPage);

app.use(pinia);
app.use(BootstrapVue);

app.mount("#app");
