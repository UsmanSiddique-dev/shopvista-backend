
import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma.ts";
import { hashSync } from "bcrypt";

export const signupController = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  let user = await prisma.user.findFirst({ where: email });
  if (user) return res.status(400).json({ meassage: "user already exists" });

  user = await prisma.user.create({
    data: { email, name, password: hashSync(password, 10) },
  });
  res.json(user)
};
