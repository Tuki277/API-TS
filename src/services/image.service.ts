import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";
import Image, { ImageDocument } from "../models/image.model";

export const createImage = async (input: DocumentDefinition<ImageDocument>) => {
    try {
        return await Image.create(input)
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getAllImage = async(query: FilterQuery<ImageDocument>) => {
    return Image.find(query).lean()
}

export const deleteImage = async (query: FilterQuery<ImageDocument>) => Image.deleteOne(query)

export const findImage = async (query: FilterQuery<ImageDocument>, options: QueryOptions = {lean: true}) => Image.findOne(query, {}, options)