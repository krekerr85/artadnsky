const { Post } = require("../resources/Post/postModel");

export const getMany = () => async (req, res) => {
	console.log("getmany");
	const docs = await Post.find({}).exec();
	res.status(200).json({ data: docs });
};
