import express from "express";
import morgan from "morgan";

const app = express();

//Routes
import router from "./routes/index.js";

//Settings
app.set("port", 3000);
app.use(morgan("dev"));

//Routes
app.use("/hello",router);


export default app;