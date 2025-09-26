import {
	createRouter,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import HomePage from "./views/HomePage.vue";

const routes: RouteRecordRaw[] = [
	{ name: "home", path: "/", component: HomePage },
	{ name: "about", path: "/about", component: AboutPage },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
