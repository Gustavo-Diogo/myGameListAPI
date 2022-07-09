import { Router } from "express";
import { userRoutes } from "./user.routes";
import { authRoutes } from './auth.routes'
import { gamesRoutes } from "./games.routes";

const router = Router();

userRoutes(router);
authRoutes(router);
gamesRoutes(router);



export { router }