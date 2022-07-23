import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import store from "./store";
import VueCarousel from "vue-carousel";
import mdbvue from "mdbvue";

import instance from "./plugin/axios.js";
console.log(instance);
const app = createApp(App);
app.use(mdbvue);
app.use(VueCarousel);
app.use(store),
  app.use(router),
  // app.use(instance),
  app.mount("#app");
