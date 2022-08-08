
import { Request, Response } from 'express'
import { hash } from 'bcryptjs'
import { prisma } from '../../service/prisma'
class ListUserInfoController {

    async execute(req: Request, res: Response) {

        try {

            const user = await prisma.user.findUnique({
                where: { id: req.userId }
            })




            const likedgames = await prisma.likedGame.findMany({
                where:
                {
                    userID: user.id
                }
            })

            const games = (await prisma.game.findMany({})).filter(e => likedgames.find(g => e.id == g.gameId))
            delete user.id
            delete user.password

            return res.status(200).json({ games, user })

        }
        catch (err) {
            return res.status(400).json(err.message)
        }

    }

}

export { ListUserInfoController }