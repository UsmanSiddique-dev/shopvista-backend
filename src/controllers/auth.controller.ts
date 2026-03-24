import { type Request,type Response } from "express"

export const loginController=(req:Request,res:Response)=>{
    res.send("login work")
}