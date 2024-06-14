import { createApp } from "vue";
import { createPinia } from "pinia";
import moment from "moment";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount("#app");
