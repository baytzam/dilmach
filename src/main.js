import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Toaster from "@meforma/vue-toaster";
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const app = createApp(App).use(router).use(store).use(Toaster);
app.use(VueAxios, axios);
app.use(BootstrapVue3).mount("#app");
