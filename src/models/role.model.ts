import mongoose from "mongoose";
export interface RoleDocument extends mongoose.Document {
    name: string;
    roleNumber: number;
    createAt: Date;
    updateAt: Date;
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
    },
    {
        timestamps: true
    }
)

const Role = mongoose.model("Role", RoleSchema)

export default Role;