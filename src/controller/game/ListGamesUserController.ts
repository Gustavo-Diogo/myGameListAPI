import { Request, Response } from "express";
import { prisma } from "../../service/prisma";

class ListGamesUserController {

    async execute(req: Request, res: Response) {
        try {
            const likedGames = await prisma.likedGame.findMany({
                where: {
                    userID: req.userId
                }
            })

            var games = []
            const jogos = await prisma.game.findMany();

            likedGames.forEach(e => {
                jogos.find(j => {
                    if (j.id == e.gameId) {
                        games.push(j)
                    }
                })
            })


            return res.status(200).json(games)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}
export { ListGamesUserController }