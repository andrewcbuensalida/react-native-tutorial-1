const express = require("express");
const db = require("./db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/home", async (req, res) => {
	console.log(`home in server hit`);
	const result = await db.query("select * from heats");

	return res.json({ status: "success", data: result.rows });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Connected to server`));
