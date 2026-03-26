import { Router } from "express";
import {
  loginController,
  signupController,
} from "../controllers/auth.controller.ts";

const authRoutes: Router = Router();

authRoutes.post("/signup", signupController);
authRoutes.post("/login", loginController);

export default authRoutes;
