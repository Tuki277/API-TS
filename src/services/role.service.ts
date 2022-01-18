import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import Role, { RoleDocument } from '../models/role.model'

//get all Role
export async function getAllRole (query: FilterQuery<RoleDocument>) {
    return Role.find(query).lean();
}

//create Role
export async function createRole (input: DocumentDefinition<RoleDocument>) {
    try {
        return await Role.create(input)
    } catch (error: any) {
        throw new Error(error);
    }
}

//update role
export function findAndUpdateRole (query: FilterQuery<RoleDocument>, update: UpdateQuery<RoleDocument>, options: QueryOptions)
{
    return Role.findOneAndUpdate(query, update, options)
}

//delete role
export function deleteRole (query: FilterQuery<RoleDocument>)
{
    return Role.deleteOne(query);
}

//find a role
export function findRole (query: FilterQuery<RoleDocument>, options: QueryOptions = { lean: true })
{
    return Role.findOne(query, {}, options)
}