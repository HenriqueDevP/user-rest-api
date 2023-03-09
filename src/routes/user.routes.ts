
import { Router } from "express";
import { getUserProfile, listUsers ,create, destroy, update} from "../controllers/user.controller.js";
import { authToken } from "../middlewares/auth.js";

const userRoutes= Router()

userRoutes.post('/create',create)
userRoutes.patch('/profile/update',authToken,update)
userRoutes.delete('/profile/delete',authToken,destroy)
userRoutes.get('/users',authToken,listUsers)
userRoutes.get('/profile',authToken,getUserProfile)


export default userRoutes