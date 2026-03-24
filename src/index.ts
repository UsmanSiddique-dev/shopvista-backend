import { type Express, type Request, type Response } from "express";
import express from "express";
import { PORT } from "./secerts.ts";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
