import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase/app";
import admin from "firebase-admin";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(admin)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB3gzVghWYFWdaT_JUt0Bu9p-hYu_xMDzQ",
  authDomain: "uniqart-d89a5.firebaseapp.com",
  databaseURL:
    "https://uniqart-d89a5-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "uniqart-d89a5",
  storageBucket: "uniqart-d89a5.appspot.com",
  messagingSenderId: "248961533032",
  appId: "1:248961533032:web:163f394f2b94a3248227dd"
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if (!app) {
    app = new Vue({
      created() {
        AOS.init();
      },
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
