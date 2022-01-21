import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get("privateKey") as string;

export const sign = (object: Object, options?: jwt.SignOptions | undefined) => {
    return jwt.sign(object, privateKey, options)
}

export const decode = (token: string) => {
    try {
        const decode = jwt.verify(token, privateKey);

        return {
            valid: true,
            expired: false,
            decode
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === "JWT Expired",
            decode: null
        }
    }
}