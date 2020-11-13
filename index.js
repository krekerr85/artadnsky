const express = require("express");
var session = require("cookie-session");
const cors = require("cors");
import config from "./src/config";
import { connect } from "./src/Utils/db";
import userRouter from "./src/resources/User/userRouter";
import { signup, signin, protect } from "./src/Utils/auth";
const app = express();
var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(
	session({
		name: "session",
		keys: ["key1", "key2"],
		cookie: {
			secure: true,
			httpOnly: true,
			expires: expiryDate,
		},
	})
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("signup", (req, res) => {
	res.send("hi");
});
app.post("/api/signup", signup);
app.post("/api/signin", signin);

app.use("/api/loadCurrentUser", protect);

app.use("/api/user", userRouter);

const start = async () => {
	try {
		await connect();
		app.listen(config.port, () => {
			console.log(`REST API on http://localhost:${config.port}/api`);
		});
	} catch (e) {
		console.error(e);
	}
};

start();
