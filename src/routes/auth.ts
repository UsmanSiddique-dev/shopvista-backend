import {Router} from "express";
import { signupController } from "../controllers/auth.controller.ts";

const authRoutes:Router=Router();

authRoutes.post('/signup',signupController)


export default authRoutes;
