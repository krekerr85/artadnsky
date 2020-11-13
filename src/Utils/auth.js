const config = require("../config");
const { User } = require("../resources/user/userModel");
const jwt = require("jsonwebtoken");

export const newToken = (user) => {
	return jwt.sign({ id: user.id }, config.secrets.jwt, {
		expiresIn: config.secrets.jwtExp,
	});
};

export const verifyToken = (token) =>
	new Promise((resolve, reject) => {
		jwt.verify(token, config.secrets.jwt, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});

export const signup = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: "Username and password required" });
	}
	try {
		const user = await User.create(req.body);
		const token = newToken(user);
		return res.status(201).send({ token });
	} catch (e) {
		console.error(e);
		return res.status(400).end();
	}
};

export const signin = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send({ message: "Email and password required" });
	}

	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(401).send({ message: "Email is incorrect" });
	}

	try {
		const match = await user.checkPassword(req.body.password);
		if (!match) {
			return res.status(401).send({ message: "Password is incorrect" });
		}
		const token = newToken(user);
		return res.status(201).send({ token: token, user: req.body.email });
	} catch (e) {
		console.error(e);
		return res.status(400).send({ message: "Not auth" });
	}
};

export const protect = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).end();
	}
	let token = req.headers.authorization;
	if (!token) {
		res.status(401).end();
		console.log("2");
		console.log(token);
	}
	try {
		const payload = await verifyToken(token);
		const user = await User.findById(payload.id)
			.select("-password")
			.lean()
			.exec();
		req.user = user;
		res.send(user);
	} catch (e) {
		console.error(e);
		return res.status(401).end();
	}
};
