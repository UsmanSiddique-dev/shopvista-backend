import { type Express, type Request, type Response } from "express";
import express from "express";
import { PORT } from "./secerts.ts";
import rootRouter from "./routes/index.ts";
import { errorMiddleware } from "./middlewares/errors.ts";
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',rootRouter)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
