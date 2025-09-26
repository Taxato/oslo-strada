import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from "vue-router";
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";

const routes: RouteRecordRaw[] = [
	{ name: "home", path: "/", component: HomePage },
	{ name: "about", path: "/about", component: AboutPage },
];

export const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});
