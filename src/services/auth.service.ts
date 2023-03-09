import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const createToken=(id:string)=>{
    return jwt.sign({id:id},process.env.SECRET,{expiresIn:"7d"})
}