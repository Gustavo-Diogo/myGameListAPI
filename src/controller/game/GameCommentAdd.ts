import { Request, Response } from "express";
import { prisma } from "../../service/prisma";

class GameCommentAdd {

    async execute(req: Request, res: Response) {
        try {

            const { rate, comment } = req.body;
            const { id } = req.params
            const game = await prisma.game.findUnique({ where: { id: Number(id) } })

            if (Number(rate) < 0 || Number(rate) > 5) {
                return res.status(400).json({
                    message: "Rate must be between 0 and 5"
                })
            }

            if (!game) {
                throw new Error("game not found.")
            }

            await prisma.rate.create({
                data: {
                    rate: Number(rate),
                    comment: comment,
                    userID: req.userId,
                    gameId: game.id
                }
            })


            return res.status(200).json({ game, message: 'o game foi comentado' })
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}
export { GameCommentAdd }