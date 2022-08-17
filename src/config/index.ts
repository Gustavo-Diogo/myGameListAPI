

export const authToken = {
    secret: String(process.env.AUTH_TOKEN),
    expiresIn: 3600
}

export const refreshToken = {
    secret: String(process.env.REFRESH_TOKEN),
    expiresIn: '21d',
}