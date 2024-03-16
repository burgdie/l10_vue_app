import "./bootstrap";

import { createApp } from "vue";

import App from "./components/App.vue";
// import About from "./components/About.vue";
import router from "./router/index.js";
import store from "./store/index.js";

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(vuetify);

app.mount("#app");
