const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
	res.send("Server resonds to root page");
});

app.listen(PORT, () => {
	console.log(`Server running on port no.: ${PORT}`);
});