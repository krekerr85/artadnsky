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
		meta: {
			guest: true,
		},
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Registration.vue"),
		meta: {
			guest: true,
		},
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
	// {
	// 	path: "/admin",
	// 	name: "admin",
	// 	component: Admin,
	// 	meta: {
	// 		requiresAuth: true,
	// 		is_admin: true,
	// 	},
	// },
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
	} else if (to.matched.some((record) => record.meta.guest)) {
		if (!store.getters.isLoggedIn) {
			next();
			return;
		}
		next("/cabinet");
	}
});

export default router;
