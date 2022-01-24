import { DocumentDefinition } from "mongoose";
import Position, { PositionDocument } from "../models/position.model";
import Role, { RoleDocument } from "../models/role.model";
import Todo, { TodoDocument } from "../models/todo.model";
import User, { UserDocument } from "../models/user.model";

export async function validatePositionDuplicated (input: DocumentDefinition<PositionDocument>) {
    const name = input.name
    const nameFind = await Position.findOne({ name })

    if (nameFind !== null){
        return false;
    }

    return nameFind;
}

export async function validateRole (input: DocumentDefinition<RoleDocument>) {
    const roleNumber = input.roleNumber
    const role = await Role.findOne({ roleNumber })

    if (role !== null){
        return false;
    }

    return role;
}

export async function validateUsername (input: DocumentDefinition<UserDocument>)
{
    const username = input.username;
    const usernameFind = await User.findOne({ username });

    if (usernameFind !== null) {
        return false;
    }

    return username;
}

export const validateTodo = async(input: DocumentDefinition<TodoDocument>) => {
    const name = input.name;
    const nameFind = await Todo.findOne({ name });

    if (nameFind !== null) {
        return false;
    }

    return name
}