const express = require("express");
pathUtils = require("path");
const app = express();
const appDir = pathUtils.resolve(__dirname, "artandsky/dist");
app.use(express.static(appDir));
app.get("*/", (req, res) => {
	res.sendFile(pathUtils.resolve(appDir, "index.html"));
});
app.post("/hello", (req, res) => {
	res.send("hello");
	console.log("response sended");
});

app.listen(3000);
