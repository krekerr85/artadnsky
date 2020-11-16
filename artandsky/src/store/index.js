import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import webApi from "../api/dataApi";
import { SERVER_ERROR_TYPE } from "../api/commonApi";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		status: "",
		token: localStorage.getItem("token") || "",
		posts: [],
		isLoggedIn: undefined,
		currentUser: null,
		isAdmin: false,
	},
	mutations: {
		login: (state) => (state.isLoggedIn = true),
		logout(state) {
			(state.isAdmin = false),
				(state.token = ""),
				(state.currentUser = null),
				(state.isLoggedIn = undefined);
		},
		setCurrentUser: (state, user) => (state.currentUser = user),
		setPosts: (state, posts) => (state.posts = posts),
		setRole: (state, isAdmin) => (state.isAdmin = isAdmin),
		setToken: (state, token) => (state.token = token),
	},
	actions: {
		logout({ commit }) {
			return new Promise((resolve) => {
				commit("logout");
				localStorage.removeItem("token");
				delete axios.defaults.headers.common["Authorization"];
				resolve();
			});
		},
		async loadCurrentUser({ commit }) {
			try {
				const response = await webApi["getUserInfo"]();
				const token = response.data.token;
				const user = response.data.email;
				const isAdmin = response.data.isAdmin;
				commit("login");
				commit("setCurrentUser", user);
				commit("setRole", isAdmin);
				commit("setToken", token);
				return response.data;
			} catch (error) {
				if (error.type === SERVER_ERROR_TYPE) {
					commit("logout");
					commit("setCurrentUser", null);
				}
				if (error.status === 404 || error.status === 400) {
					commit("logout");
					commit("setCurrentUser", null);
				}
				console.log(error);
				throw error;
			}
		},
		login: async ({ dispatch, commit }, data) => {
			const response = await dispatch("fetchServer", ["login", data]);
			const token = response.data.token;
			const user = response.data.email;
			const isAdmin = response.data.isAdmin;
			localStorage.setItem("token", token);
			axios.defaults.headers.common["Authorization"] = token;
			console.log(user, isAdmin);
			commit("login");
			commit("setCurrentUser", user);
			commit("setRole", isAdmin);
			commit("setToken", token);
			return user;
		},
		fetchServer: async (state, [serverAction, ...data]) => {
			const { commit } = state;
			// ходим на сервер через стор, чтобы централизованно обрабатывать ошибки
			try {
				return await webApi[serverAction](...data);
			} catch (error) {
				if (error.type === SERVER_ERROR_TYPE) {
					if (error.status === 401) {
						commit("logout");
						commit("setCurrentUser", null);
					}
					if (error.status === 404 || error.status === 400) commit("notFound");
				}
				console.log(error);
				throw error;
			}
		},
	},
	modules: {},
	getters: {
		isLoggedIn: (state) => !!state.token,
		currentUser: (state) => state.currentUser,
		token: (state) => state.token,
		isAdmin: (state) => state.isAdmin,
	},
});
