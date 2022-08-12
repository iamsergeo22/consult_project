import {
  createRouter,
  createWebHistory
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicePage from "../views/ServicePage.vue";
import ClientsPage from '../views/ClientsPage.vue';
import TeamPage from '../views/TeamPage.vue';
import BlogPage from '../views/BlogPage.vue';
import ContactPage from "@/views/ContactPage.vue";

const routes = [{
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
    path: "/Client",
    name: "Client",
    component: ClientsPage,
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
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;