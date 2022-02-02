import { Request, Response } from "express"
import { SessionDocument } from "../models/session.model"
import { findSession, findSessionByUser } from "../services/sesssion.service"
import { createUser, deleteUser, findAndUpdateUser, findUser, findUserBySessionId, getAllUser } from "../services/user.service"
import { validateUsername } from "../utils/validateDuplicated"

export async function createUserController (req: Request, res: Response) {
    const body: any = await validateUsername(req.body)

    if (body === false) {
        return res.status(401).json({ "Error": false, "Message": "Username already exists" })
    } else {
        const post = await createUser({ ...req.body })
        return res.status(201).json({ "Error": false, "data": post})
    }
}

export async function deleteUserController (req: Request, res: Response) {
    const id = req.params.id

    const findUserController = await findUser({ _id: id });
    if (findUserController == null ) {
        return res.status(404).json({ "Error": true, "Message": "Not Found User "});
    } else {
        await deleteUser(findUserController)
        return res.status(200).json({ "Error": false, "Message": "Deleted" })
    }
}

export async function updateUserController (req: Request, res: Response) {
    const id = req.params.id
    const update = req.body
    const findUserController = await findUser({ _id: id });
    if (findUserController == null) {
        return res.status(404).json({ "Error": true, "Message": "Not Found User" })
    } else {
        const updatePost = await findAndUpdateUser({ _id: id }, update, { new: true })
        return res.status(200).json({ "Error": false, "data": updatePost })
    }
}

export async function getAllUserController (req: Request, res: Response) {
    const User = await getAllUser();

    return res.status(200).json({ "Error": false, "data": User })
}

export const getUserProfileBySessionId = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId
    const findSessionController: SessionDocument = await findSession({ _id: sessionId})
    try {
        if (findSessionController != null) {
            const userId = (findSessionController.user)
            const findUserResult = await findUserBySessionId(userId)
            return res.status(200).json({
                "Error": false,
                "Message": "Query success",
                "object": findUserResult
            })
        } else {
            return res.status(404).json({
                "Error": false,
                "Message": "NOT FOUND",
                "object": ""
            })
        }
    } catch (error: any) {
        return res.status(500).json({
            "Error": true,
            "Message": "Error",
            "object": error
        })
    }
}

export const getSessionByUser = async (req: Request, res: Response) => {
    const sessionId = req.params.sessionId
    const findSessionController: SessionDocument = await findSession({ _id: sessionId})
    try {
        if (findSessionController != null) {
            const userId = findSessionController.user
            const userSession = await findSessionByUser({ user: userId })
            return res.status(200).json({
                "Error": false,
                "Message": "Query success",
                "object": userSession
            })
        } else {
            return res.status(404).json({
                "Error": true,
                "Message": "NOT FOUND",
                "object": ""
            })
        }
    } catch (error) {
        return res.status(500).json({
            "Error": true,
            "Message": "Error",
            "object": error
        })
    }
}