import dotenv from "dotenv";
dotenv.config({path:'.env'});

export const PORT=process.env.PORT;
export const JWT_SECERT=process.env.JWT_SECERT!