import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createAt: string;
    updateAt: string
}

const SessionSchema = new mongoose.Schema (
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        valid: {
            type: String,
            default: true
        },
        userAgent: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Session = mongoose.model("Session", SessionSchema)
export default Session;