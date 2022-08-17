import { Router } from "express";
import { AddFavoriteGameController, GameCommentAdd, ListGamesController, ListGamesUserController, ReleasedGamesController, ListGameComments } from "../controller/game";
import { authMiddleware } from "../middleware/authMiddleware";
const list = new ListGamesController()
const addFav = new AddFavoriteGameController()
const listFav = new ListGamesUserController()
const listReleased = new ReleasedGamesController()
const comment = new GameCommentAdd()
const commentList = new ListGameComments()
const gamesRoutes = (router: Router): void => {
    router.get("/games/list", list.execute.bind(ListGamesController));
    router.patch("/games/fav-add/:id", authMiddleware, addFav.execute.bind(AddFavoriteGameController))
    router.get("/games/fav-games", authMiddleware, listFav.execute.bind(ListGamesUserController))
    router.get("/games/released", listReleased.execute.bind(ReleasedGamesController))
    router.post("/games/comment/:id", authMiddleware, comment.execute.bind(GameCommentAdd));
    router.get("/games/comment/:id",  commentList.execute.bind(ListGameComments));
}

export { gamesRoutes }