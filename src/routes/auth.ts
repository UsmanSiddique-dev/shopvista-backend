import {Router} from "express";
import { loginController } from "../controllers/auth.controller.ts";

const authRoutes:Router=Router();

authRoutes.get('/login',loginController)


export default authRoutes;
