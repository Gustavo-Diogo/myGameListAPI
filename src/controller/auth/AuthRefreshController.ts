import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";
import { authToken, refreshToken } from "../../config";
import { TokenPayload } from '../../interface/index'


class AuthRefreshController {
    async execute(req: Request, res: Response
    ) {


        try {

            const { refresh_token } = req.body

            const isValid = verify(refresh_token, refreshToken.secret);

            if (!isValid) {
                return res.status(300).json({ auth: false, token: '' })
            }

            const { id } = isValid as TokenPayload;

            const newToken = sign({ id }, authToken.secret, { expiresIn: authToken.expiresIn });

            return res.status(200).json({ auth: true, token: newToken })

        } catch (error) {
            return res.status(400).json(error.message)
        }


    }
}

export { AuthRefreshController }