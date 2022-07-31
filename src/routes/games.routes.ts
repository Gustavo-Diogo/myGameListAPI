import { Router } from "express";
import { AddFavoriteGameController, ListGamesController } from "../controller/game";
import { authMiddleware } from "../middleware/authMiddleware";
const list = new ListGamesController()
const addFav = new AddFavoriteGameController()
const gamesRoutes = (router: Router): void => {
    router.get("/games/list", authMiddleware, list.execute.bind(ListGamesController));
    router.patch("/games/fav-add/:id", authMiddleware, addFav.execute.bind(AddFavoriteGameController))
}

export { gamesRoutes }