import express from "express";
import cors from "cors";
import { routes } from "./router";

export const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.send("habla pe causa!");
});
routes(app);
