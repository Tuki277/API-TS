import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from '../models/user.model'


export async function createAccount (input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input)
    } catch (error: any) {
        throw new Error(error.message)
    }
}