
import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma.ts";
import { hashSync,compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken"
import { JWT_SECERT } from "../secerts.ts";

export const signupController = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });
  if (user) return res.status(400).json({ meassage: "user already exists" });

  user = await prisma.user.create({
    data: { email, name, password: hashSync(password, 10) },
  });
  res.json(user)
};
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user = await prisma.user.findFirst({ where: { email } });
  if (!user) return res.status(400).json({ meassage: "user does not exists" });

 if(!compareSync(password,user.password)){
  return res.status(400).json({ meassage: "password does not exist" })
 }
 const token= jwt.sign({
  userId: user.id,
 },JWT_SECERT)
  res.json({user,token})
};
