import { findUserByEmail } from "../services/user.service.js"
import bcrypt from 'bcrypt'
import { createToken } from "../services/auth.service.js"

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email || !password){
            return res.status(404).json({message:"Submit all fields"})
        }

        const user= await findUserByEmail(email)

        if(!user){
            return res.status(422).json({message:"Email or password wrong"})
        }
const verifyPassword= await bcrypt.compare(password,user.password)
if(verifyPassword===false){
return res.status(422).json({message:"Email or password wrong"})
}
const token =createToken(user._id)
return res.status(200).json(token)
    }
    catch(error){
console.error(error)
return res.status(504).json({message:"Internal server error"})
    }
}