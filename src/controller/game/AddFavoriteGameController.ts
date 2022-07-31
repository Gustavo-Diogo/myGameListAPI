import { Request, Response } from "express";
import { prisma } from "../../service/prisma";

class AddFavoriteGameController {

    async execute(req: Request, res: Response) {
        try {

            const {id} = req.params
            const game = await prisma.game.findUnique({ where: { id: Number(id) } })


            if (!game) {
                throw new Error("game not found.")
            }

            try{
                await prisma.likedGame.create({
                    data: {
                        gameId: game.id,
                        userID: req.userId
                    }
                })
            }catch(err){
                await prisma.likedGame.deleteMany({
                    where:{
                        gameId: game.id,
                        userID: req.userId
                    }
                })

                return res.status(200).json({game,message:'o game foi desvinculado'})
            }

            return res.status(200).json({game,message:'o game foi vinculado'})
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}
export { AddFavoriteGameController }