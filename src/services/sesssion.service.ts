import { FilterQuery, QueryOptions } from "mongoose";
import Session, { SessionDocument } from "../models/session.model";

export const findSession = (query: FilterQuery<SessionDocument>, options: QueryOptions = {lean: true}) => {
    return Session.findOne(query, {}, options)
}

export const findSessionByUser = (query: FilterQuery<SessionDocument>, options: QueryOptions = {lean: true}) => {
    return Session.find(query, {}, options)
}