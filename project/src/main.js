import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
// import "@/pages/RecentReport/RecentReport.css";

import App from "./App.vue";
// import router from "./router";

const app = createApp(App);

app.use(createPinia());
// app.use(router);

app.mount("#app");
