import { Request, Response } from "express";
import { prisma } from "../../service/prisma";

class ListGamesUserController {

    async execute(req: Request, res: Response) {
        try {
            const games = await prisma.likedGame.findMany({
                where: {
                    userID: req.userId
                }
            })
            return res.status(200).json(games)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}
export { ListGamesUserController }