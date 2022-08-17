import { Request, Response } from "express";
import { prisma } from "../../service/prisma";

class ListGameComments {

    async execute(req: Request, res: Response) {
        try {

            const { id } = req.params

            const game = await prisma.game.findUnique({ where: { id: Number(id) } })

            const comments = await prisma.rate.findMany({
                where: {
                    gameId: game.id
                }
            })



            return res.status(200).json(comments)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}
export { ListGameComments }