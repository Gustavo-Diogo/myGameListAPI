import { Router } from "express";
import { CreateUserController, ListUserInfoController } from "../controller";
import { authMiddleware } from "../middleware/authMiddleware";

const create = new CreateUserController();
const list = new ListUserInfoController()

const userRoutes = (router: Router): void => {
    router.post('/user', create.execute.bind(CreateUserController))
    router.get('/user', authMiddleware, list.execute.bind(ListUserInfoController))

}

export { userRoutes }