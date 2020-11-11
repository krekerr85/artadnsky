import Vue from "vue";
import VueRouter from "vue-router";
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
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
