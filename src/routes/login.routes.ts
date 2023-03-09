import { Router } from "express";
import { login } from "../controllers/login.controller.js";

const loginRoutes=Router()

loginRoutes.post('/login',login)
export default loginRoutes