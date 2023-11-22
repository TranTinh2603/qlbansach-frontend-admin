import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/LoginView.vue";
const routes = [
    {
    path: "/",
    name: "login",
    component: Login,
    },
    {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;