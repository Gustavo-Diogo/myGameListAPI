import { Router } from "express";
import { AddFavoriteGameController, ListGamesController, ListGamesUserController } from "../controller/game";
import { authMiddleware } from "../middleware/authMiddleware";
const list = new ListGamesController()
const addFav = new AddFavoriteGameController()
const listFav = new ListGamesUserController()
const gamesRoutes = (router: Router): void => {
    router.get("/games/list", list.execute.bind(ListGamesController));
    router.patch("/games/fav-add/:id", authMiddleware, addFav.execute.bind(AddFavoriteGameController))
    router.get("/games/fav-games", authMiddleware, listFav.execute.bind(ListGamesUserController))
}

export { gamesRoutes }