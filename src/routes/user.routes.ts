import { Router } from "express";
import { CreateUserController } from "../controller";
import { authMiddleware } from "../middleware/authMiddleware";

const create = new CreateUserController();

const userRoutes = (router: Router): void => {
    router.post('/user', create.execute.bind(CreateUserController))
    router.get('/games', authMiddleware, (request, response) => {
        response.json({
            message: [{ name: 'Batman', id: 1 }, { name: 'Robin', id: 2 }, { name: 'catwoman', id: 3 }]
        })
    })
}

export { userRoutes }