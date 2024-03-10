import { createRouter, createWebHistory } from "vue-router";

import About from "../components/About.vue";
import Home from "../components/Home.vue";
import Register from "../components/Auth/Register.vue";
import Login from "../components/Auth/Login.vue";
import NotFound from "../components/Errors/404.vue";
import Dashboard from "../components/Auth/Dashboard.vue";

const routes = [
  {
    path: "/:any",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
