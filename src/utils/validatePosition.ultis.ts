import { DocumentDefinition } from "mongoose";
import Position, { PositionDocument } from "../models/position.model";

export async function validatePositionDuplicated (input: DocumentDefinition<PositionDocument>) {
    const name = input.name
    const nameFind = await Position.findOne({ name })

    if (nameFind !== null){
        return false;
    }

    return nameFind;
}