import { Request, Response } from "express"
import { createAccessToken, createSession } from "../services/login.service"
import { sign } from "../utils/jwt.utils"
import { validatePassword } from "../utils/validatePassword.utils"
import config from "config"

export const Login = async ( req: Request, res: Response ) => {
    const user: any = await validatePassword(req.body)

    if (!user) {
        return res.status(401).json({ "Error": true, "Message": "Ivalid email or password" })
    }

    const session = await createSession(user._id, req.get("user-agent") || "");

    const accessToken = createAccessToken ({
        user,
        session,
    })
    const refreshToken = sign({ session: session._id }, {
        expiresIn: config.get("refreshTokenTtl"),
    })

    return res.status(200).json({ accessToken, refreshToken, "Error": false, "Message": "Login success"})
}