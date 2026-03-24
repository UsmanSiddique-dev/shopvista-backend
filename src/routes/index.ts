import {Router } from "express";
import authRoutes from "./auth.ts";
import { PrismaClient } from "@prisma/client/extension";
import { log } from "node:console";

const rootRouter:Router=Router();

rootRouter.use("/auth",authRoutes);
const prismaClient = new PrismaClient({
    log:['query']
});


export default rootRouter;