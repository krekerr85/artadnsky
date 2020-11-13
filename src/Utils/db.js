import mongoose from "mongoose";
import options from "../config";

export const connect = (url = options.dbUrl, opts = {}) => {
	return mongoose.connect(
		"mongodb+srv://artandsky:1525402hj@cluster0.vcohb.mongodb.net/artandsky?retryWrites=true&w=majority",
		{ ...opts, useNewUrlParser: true, useUnifiedTopology: true }
	);
};
