import { Request, Response } from "express"
import { createPosition, findAndUpdatePosition, getAllPosition, findPosition, deletePosition } from "../services/position.service" 
import { validatePositionDuplicated } from "../utils/validateDuplicated"

export async function getAllPositionController (req: Request, res: Response) {
    const Position = await getAllPosition({ valid: true })
    return res.status(200).json({ "Error": false, "data": Position })
}

export async function createPositionController (req: Request, res: Response) {
    const body: any = await validatePositionDuplicated(req.body)

    if (body === false) {
        return res.status(401).json({ "Error": false, "Message": "Name position already exists"})
    } else {
        const post = await createPosition({ ... req.body })
        return res.status(201).json({ "Error": false, "data": post })
    }
}

export async function deletePositionController (req: Request, res: Response) {
    const id = req.params.id;

    const findPositionController = await findPosition({ _id: id });
    if (findPositionController == null) {
        res.status(404).json({ "Error": true, "Message": "Not Found Position"})
    } else {
        await deletePosition(findPositionController);
        return res.status(200).json({ "Error": false, "Message": "Deleted" })
    }
}

export async function updatePositionController (req: Request, res: Response) {
    const id = req.params.id;
    const update = req.body;

    const findPositionController = await findPosition({ _id: id });
    if (findPositionController == null) {
        res.status(404).json({ "Error": true, "Message": "Not Found Position"})
    } else {
        const updatePost = await findAndUpdatePosition({ _id: id }, update, { new: true });
        return res.status(200).json({ "Error": false, "data": updatePost })
    }
}