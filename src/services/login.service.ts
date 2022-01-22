import config from "config"
import { sign } from "../utils/jwt.utils";
import { FilterQuery, LeanDocument, UpdateQuery } from "mongoose";
import Session, { SessionDocument } from "../models/session.model"
import { UserDocument } from "../models/user.model";

// const expiresIn = config.get("accessTokenTtl")

export const createSession = async (userId: string, userAgent: string) => {
    const session = await Session.create({ user: userId, userAgent })

    return session;
}

export const createAccessToken = (
    { user, session } : {
        user: | Omit<UserDocument, "password"> | LeanDocument<Omit<UserDocument, "password">>;
        session: | Omit<SessionDocument, "password"> | LeanDocument<Omit<SessionDocument, "password">>;
    }
) => {
    const accessToken = sign(
        { user: user._id, session: session._id },
        { expiresIn : config.get("accessTokenTtl") }
    );

    return accessToken;
}

export const updateSessionLogout = async (query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) => {
    return Session.updateOne(query, update)
}