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
    {
        path: "/books",
        name: "books",
        component: () => import("@/views/BookView.vue"),
    },
    {
        path: "/books/edit/:bookId",
        name: "books.edit",
        component: () => import("@/views/BookEditView.vue"),
        props: true
    },
    {
        path: "/books/detail/:bookId",
        name: "books.detail",
        component: () => import("@/views/BookDetailView.vue"),
        props: true
    },
    {
        path: "/products/add",
        name: "products.add",
        component: () => import("@/views/ProductAdd.vue"),
    },
    {
        path: "/authors",
        name: "authors.home",
        component: () => import("@/views/AuthorHomeView.vue"),
    },
    {
        path: "/users",
        name: "users",
        component: () => import("@/views/UserView.vue"),
    },
    {
        path: "/users/detail/:userId",
        name: "users.detail",
        component: () => import("@/views/UserDetailView.vue"),
        props: true
    },
    {
        path: "/users/edit/:userId",
        name: "users.edit",
        component: () => import("@/views/UserEditView.vue"),
        props: true
    },
    {
        path: "/orders",
        name: "orders.home",
        component: () => import("@/views/OrderHomeView.vue"),
    },
    {
        path: "/orders/detail/:orderId",
        name: "orders.detail",
        component: () => import("@/views/OrderDetailView.vue"),
        props: true
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;