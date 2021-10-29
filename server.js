import dotenv from "dotenv";
dotenv.config();
import express from "express";
const Server = express();

const port = process.env.PORT || 3000;

Server.listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
