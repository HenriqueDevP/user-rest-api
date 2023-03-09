import {Schema,model,Document} from "mongoose";
import bcrypt from 'bcrypt'

interface UserI extends Document{
email:String,
password:String,
}

const userSchema= new Schema<UserI>({
    email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    password:{
        type:String,
        required:true,
    }
})

userSchema.pre('save', async function (next){
this.password=await bcrypt.hash(this.password,8)
    next()
})
const User=model<UserI>('User',userSchema)
export default User