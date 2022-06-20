import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { authToken, refreshToken } from "../config";

function authMiddleware(
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

            verify(token, authToken.secret);
            return next()
        } catch (error) {
            throw new Error('Token inválido');
        }
    } catch (error) {
        return res.status(401).json(error.message)
    }


}

export { authMiddleware }