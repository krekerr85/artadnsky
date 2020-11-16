import axios from "axios";
export const SERVER_ERROR_TYPE = "serverError";

export async function fetchApi(url, args, method) {
	return await axios({
		url,
		data: args,
		method,
	});
}
