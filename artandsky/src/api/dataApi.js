import { fetchApi } from "./commonApi";

export default {
	login: (data) => {
		return fetchApi("/api/signin", data, "Post");
	},

	logout: () => {
		return fetchApi("/api/signout");
	},

	register: (data) => {
		return fetchApi("/api/signup", data, "Post");
	},

	getUserInfo: () => {
		return fetchApi(`/api/user`);
	},
	createPost(data) {
		return fetchApi("/api/post", data, "Post");
	},
	loadPosts() {
		return fetchApi("/api/post");
	},
};
