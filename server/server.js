const express = require("express");
const db = require("./db");
require("dotenv").config();

const app = express();

app.get("/test", async (req, res) => {
	console.log(`test hit`);
	const result = await db.query("select * from heats");

	return res.send(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Connected to server`));
