import {
	createRouter,
	createWebHashHistory,
	type RouteRecordRaw,
} from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import HomePage from "./views/HomePage.vue";
import NotFound from "./views/NotFound.vue";

const routes: RouteRecordRaw[] = [
	{ name: "Home", path: "/", component: HomePage },
	{ name: "About", path: "/about", component: AboutPage },
	{ name: "NotFound", path: "/:pathMatch(.*)", component: NotFound },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
