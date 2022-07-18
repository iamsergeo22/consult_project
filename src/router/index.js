import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicePage from "../views/ServicePage.vue";
import ProductsPage from '../views/ProductsPage.vue';
import TeamPage from '../views/TeamPage.vue';
import BlogPage from '../views/BlogPage.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/service",
    name: "Service",
    component: ServicePage,
  },

  {
    path: "/product",
    name: "Product",
    component: ProductsPage,
  },
  {
    path: "/team",
    name: "Team",
    component: TeamPage,
  },
    {
    path: "/blog",
    name: "Blog",
    component: BlogPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
