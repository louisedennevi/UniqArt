import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import NotFound from "../views/NotFound.vue";
// import Info from "../views/Info.vue";
import MollyBladskogProfile from "../views/MollyBladskogProfile.vue";
import LouiseDenneviProfile from "../views/LouiseDenneviProfile.vue";
import Login from "../views/Login.vue";
import Secret from "../views/Secret.vue";
import Register from "../views/Register.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/mollybladskog",
    name: "Mollybladskog",
    component: MollyBladskogProfile
  },
  {
    path: "/louisedennevi",
    name: "Louisedennevi",
    component: LouiseDenneviProfile
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/secret",
    name: "secret",
    component: Secret,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
