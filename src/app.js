import express from "express";
import router from "../routes/index.routes.js";
import { start } from "./server.js";
import { logMiddleware } from "../middleware/logs/logMiddleware.js";

const app = express();

app.use(logMiddleware);

app.use(express.json());

app.use('/',router);


start();

export default app;