import { prisma } from "../../service/prisma";
import { Response, Request } from "express";


class ReleasedGamesController {
    async execute(req: Request, res: Response) {


        const jogos = await prisma.game.findMany({})

        jogos.sort((a, b) => (a.creationDate < b.creationDate) ? 1 : -1)


        res.status(200).json([jogos[0], jogos[1], jogos[2]])

    }


}

export { ReleasedGamesController }