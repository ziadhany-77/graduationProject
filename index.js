import express from "express";
import dotenv from "dotenv";
import connectToDb from "./DataBase/DBconnection.js";
import { bootstrap } from "./bootstrap.js";

const app = express();
dotenv.config();

const port = +process.env.PORT;

connectToDb();
bootstrap(app);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`listening on port ${port}!`));
