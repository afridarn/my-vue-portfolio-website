import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";
import Contact from "@/views/Contact.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/project/:slug",
    component: ProjectDetails,
    props: true,
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
