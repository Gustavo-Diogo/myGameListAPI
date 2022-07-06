import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { authToken, refreshToken } from "../config";
import { TokenPayload } from "../interface";
import { prisma } from "../service/prisma";

async function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {

    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw new Error('Token não encontrado');
        }
        const [, token] = authorization.split(' ');

        if (!token) {
            throw new Error('Token não encontrado');
        }


        try {

            const data = verify(token, authToken.secret) as TokenPayload;
            const user = await prisma.user.findUnique({
                where: {
                    id: data.id
                }
            })
            

            return next()
        } catch (error) {
            throw new Error('Token inválido');
        }
    } catch (error) {
        return res.status(401).json(error.message)
    }


}

export { authMiddleware }