const express = require("express");
const db = require("./db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/v1/heats", async (req, res) => {
	const result = await db.query("SELECT * FROM heats ORDER BY timestamp");
	res.status(200).json({ status: "success", data: result.rows });
});

app.post("/api/v1/heats", async (req, res) => {
	try {
		const result = await db.query(
			"INSERT INTO heats (title,body,rank) VALUES ($1,$2,$3) RETURNING *",
			[req.body.title, req.body.body, req.body.rank]
		);
		res.status(201).json({
			status: "success",
			data: result.rows[0],
		});
	} catch (error) {}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Connected to server`));
