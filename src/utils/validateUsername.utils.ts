import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../models/user.model";

export async function validateUsername (input: DocumentDefinition<UserDocument>)
{
    const username = input.username;
    const usernameFind = await User.findOne({ username });

    if (usernameFind !== null) {
        return false;
    }

    return username;
}