const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
	{
		author: {
			type: String,
			required: true,
			trim: true,
		},

		text: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		isModerated: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

postSchema.pre("save", function (next) {
	return next();
});

export const Post = mongoose.model("post", postSchema);
