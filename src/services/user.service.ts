import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import User, { UserDocument } from '../models/user.model'

//create User
export async function createUser (input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input)
    } catch (error: any) {
        throw new Error(error.message)
    }
}

//delete user
export async function deleteUser (query: FilterQuery<UserDocument>) {
    return User.deleteOne(query)
}

//update Position
export function findAndUpdateUser (query: FilterQuery<UserDocument>, update: UpdateQuery<UserDocument>, options: QueryOptions)
{
    return User.findOneAndUpdate(query, update, options)
}

// Get all User
export async function getAllUser ()
{
    return User.aggregate([
        {
            $lookup: {
                from: "positions",
                localField: "position",
                foreignField: "_id",
                as: "position"
            },
        },
        {
            $lookup: {
                from: "roles",
                localField: "role",
                foreignField: "_id",
                as: "role"
            },
        },
        {
            $project: { 'position._id': 0, 'role._id': 0}
        }
    ])
}

//find a user
export function findUser (query: FilterQuery<UserDocument>, options: QueryOptions = {lean: true})
{
    return User.findOne(query, {}, options)
}

export const findUserBySessionId = (id: string) => {
    return User.aggregate([
        {
            $match: {_id: id }
        },
        {
            $lookup: {
                from: "positions",
                localField: "position",
                foreignField: "_id",
                as: "position"
            },
        },
        {
            $lookup: {
                from: "roles",
                localField: "role",
                foreignField: "_id",
                as: "role"
            },
        },
        {
            $project: { 'position._id': 0, 'role._id': 0}
        }
    ])
}