import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';
import { PositionDocument } from "./position.model";
import { RoleDocument } from "./role.model";

export interface UserDocument extends mongoose.Document {
    email: string;
    username: string;
    password: string;
    createAt: Date;
    updateAt: Date;
    role: RoleDocument["id"];
    position: PositionDocument["id"];
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Schema.Types.ObjectId,
            ref: "Role"
        },
        position: {
            type: Schema.Types.ObjectId,
            ref: "Position"
        }
    },
    {
        timestamps: true
    }
)

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

UserSchema.pre("save", async function (next: any) {
    let user = this as UserDocument;

    if (!user.isModified("password"))
    {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
})

const User = mongoose.model("User", UserSchema)

export default User;