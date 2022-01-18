import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import Position, { PositionDocument } from '../models/position.model';

//get all Position
export async function getAllPosition (query: FilterQuery<PositionDocument>) {
    return Position.find(query).lean();
}

//create Position
export async function createPosition (input: DocumentDefinition<PositionDocument>) {
    try {
        return await Position.create(input)
    } catch (error: any) {
        throw new Error(error);
    }
}

//update Position
export function findAndUpdatePosition (query: FilterQuery<PositionDocument>, update: UpdateQuery<PositionDocument>, options: QueryOptions)
{
    return Position.findOneAndUpdate(query, update, options)
}

//delete Position
export function deletePosition (query: FilterQuery<PositionDocument>)
{
    return Position.deleteOne(query);
}

//find a Position
export function findPosition (query: FilterQuery<PositionDocument>, options: QueryOptions = { lean: true })
{
    return Position.findOne(query, {}, options)
}