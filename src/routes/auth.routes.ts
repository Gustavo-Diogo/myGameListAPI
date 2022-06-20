import { Router } from "express";
import { AuthController, AuthRefreshController } from "../controller/auth";

const auth = new AuthController()
const refresh = new AuthRefreshController()

const authRoutes = (router: Router): void => {
    router.post("/auth", auth.execute.bind(AuthController));
    router.post("/auth/refresh-token", refresh.execute.bind(AuthRefreshController));
}

export { authRoutes }