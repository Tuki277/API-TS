import mongoose, { Schema } from "mongoose";
import { UserDocument } from "./user.model";

export interface RoleDocument extends mongoose.Schema {
    name: string;
    roleNumber: number;
    createAt: Date;
    updateAt: Date;
    account: UserDocument["_id"];
}

const RoleSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        roleNumber: {
            type: Number,
            required: true
        },
        account: [
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }
        ]
    },
    {
        timestamps: true
    }
)

const Role = mongoose.model("Role", RoleSchema)

export default Role;