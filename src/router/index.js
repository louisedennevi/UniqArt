import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile";
import NotFound from "../views/NotFound.vue";
// import Info from "../views/Info.vue";
import MollyBladskogProfile from "../views/MollyBladskogProfile.vue";
import LouiseDenneviProfile from "../views/LouiseDenneviProfile.vue";

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
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: Profile,
  //   children: [
  //     {
  //       path: "/mollybladskog",
  //       name: "Mollybladskog",
  //       compontent: MollyBladskog
  //     }
  //   ]
  // },
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

export default router;
