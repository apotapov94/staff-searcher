import "./assets/scss/main.scss";
import store from "./store";
import App from "./App.vue";

import { createApp } from "vue";

const app = createApp(App);

app.use(store);

app.mount("staff-searcher");
