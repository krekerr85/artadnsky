import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Registration.vue"),
	},
	{
		path: "/docs",
		name: "Docs",
		component: () => import("../views/Documents.vue"),
	},
	{
		path: "*",
		name: "PageNotFound",
		component: () => import("../views/PageNotFound.vue"),
	},
	{
		path: "/cabinet",
		name: "Cabinet",
		component: () => import("../views/Cabinet.vue"),
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/login");
	} else {
		next();
	}
});
export default router;
