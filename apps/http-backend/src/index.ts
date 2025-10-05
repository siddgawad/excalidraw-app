import express from "express";
import { Response,Request } from "express";
import jwt from "jsonwebtoken";
import z, { email } from "zod";
import bcrypt from "bcrypt";
import env from "dotenv";

const app = express();

const JWT_SECRET= process.env.JWT_SECRET as string;

const validateUserSchema = z.object({
    email:z.email().min(1).max(50).toLowerCase(),
    password:z.string().min(8).max(50)
});



app.post("/v1/sign-up",(req:Request,res:Response,err)=>{
    try{
        const { email, password } = req.body;
        const data = validateUserSchema.parse({ email, password });
        if(data){

        }
    }catch(err){
        if (err instanceof z.ZodError){
            err.issues;
        }
        
    }
})

app.post("/v1/sign-in",async (req:Request,res:Response,err)=>{
    try{
        const { email, password } = req.body;
        const data = validateUserSchema.parse({ email, password });
        if(data){
            const userExists = await db.findOne(data.email);
            if(userExists){
                const validate = await bcrypt.compare(password,userExists.password);
                if(validate) {
                    const userId = userExists._id
                    await jwt.sign({userId},JWT_SECRET)      
            }

        }
    }catch(err){
        if (err instanceof z.ZodError){
            err.issues;
        }
        
    }
})

app.post("/v1/room",(req:Request,res:Response,err)=>{
    try{

    }catch(err){

    }
})





app.listen(3003);

console.log("HTTP backend listening on port 3003");