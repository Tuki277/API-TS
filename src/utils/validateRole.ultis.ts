import { DocumentDefinition } from "mongoose";
import Role, { RoleDocument } from "../models/role.model";

export async function validateRole (input: DocumentDefinition<RoleDocument>) {
    const roleNumber = input.roleNumber
    const role = await Role.findOne({ roleNumber })

    console.log({ role })

    if (role !== null){
        return false;
    }

    return role;
}