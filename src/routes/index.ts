import { Router } from "express";
import { userRoutes } from "./user.routes";
import { authRoutes } from './auth.routes'

const router = Router();

userRoutes(router);
authRoutes(router);



export { router }