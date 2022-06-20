import { Request, Response } from 'express'
import { hash } from 'bcryptjs'
import { prisma } from '../../service/prisma'
class CreateUserController {

    async execute(req: Request, res: Response) {

        try {
            const { username, email, password } = req.body

            if (username == '' || username == null) {
                throw new Error('Username is required')
            } else if (email == '' || email == null) {
                throw new Error('email is required')
            } else if (password == '' || password == null) {
                throw new Error('password is required')
            }

            const usernameAlreadyExists = await prisma.user.findUnique({
                where: {
                    username
                }
            })

            if (usernameAlreadyExists) {
                throw new Error('Username já cadastrado')
            }


            const emailAlreadyExists = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if (emailAlreadyExists) {
                throw new Error('Email já cadastrado')
            }

            const hashPassword = await hash(password, 8)

            const user = await prisma.user.create({
                data: {
                    username,
                    password: hashPassword,
                    email
                }
            })

            delete user.id

            return res.status(200).json(user)

        }
        catch (err) {
            return res.status(400).json(err.message)
        }




    }

}

export { CreateUserController }