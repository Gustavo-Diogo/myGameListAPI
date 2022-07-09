import { Router } from "express";
import { ListGamesController } from "../controller/game";
import { authMiddleware } from "../middleware/authMiddleware";
const list = new ListGamesController()

const gamesRoutes = (router: Router): void => {
    router.get("/games/list", authMiddleware,list.execute.bind(ListGamesController));
}

export { gamesRoutes }