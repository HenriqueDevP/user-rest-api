import User from "../models/user.model.js"

interface userBody{
    email:String,
    password:String
}
export const createUser=(body:userBody)=>{
return User.create(body)
}

export const findUserByEmail=(email:string)=>{
return User.findOne({email:email})
}

export const findUserById=(id:string)=>{
return User.findById(id)
}
export const findAllUsers=()=>{
    return User.find()
}

export const updateUser=(id:string,body:userBody,)=>{
    return User.findOneAndUpdate({_id:id},body)
}
export const deleteUser=(id:string)=>{
    return User.findOneAndDelete({_id:id})
}