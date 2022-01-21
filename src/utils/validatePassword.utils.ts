import User, { UserDocument } from "../models/user.model";

export const validatePassword = async ({ 
        email, password 
    }: {
        email: UserDocument["email"];
        password: string
    }) => {
    const user = await User.findOne({ email });

    if (user == null) {
        return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return false;
    }

    return user
}