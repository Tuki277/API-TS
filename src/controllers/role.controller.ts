import { Request, Response } from "express";
import { createRole, findAndUpdateRole, deleteRole, getAllRole, findRole} from "../services/role.service";
import { validateRole } from "../utils/validateRole.ultis";

export async function getAllRoleController (req: Request, res: Response) {
    const Role = await getAllRole({ valid: true })

    return res.status(200).json({ "Error": false, "data": Role })
}

export async function createRoleController (req: Request, res: Response) {
    const body: any = await validateRole(req.body)

    if (body != null) {
        return res.status(401).json({ "Error": false, "Message": "Role number already exists"})
    }
    else {
        const post = await createRole({ ...req.body })
        return res.status(201).json({ "Error": false, "data": post })
    }
}

export async function deleteRoleController (req: Request, res: Response) {
    const id = req.params.id;

    const findRoleController = await findRole({ _id: id });
    if (findRoleController == null) {
        res.status(404).json({ "Erorr": true, "Message": "Not Found Role"})
    }
    else {
        await deleteRole(findRoleController);
        return res.status(200).json({ "Error": false, "Message": "Deleted"})
    }
}

export async function updateRoleController (req: Request, res: Response)
{
    const id = req.params.id;
    const update = req.body;
    const findRoleController = await findRole({ _id: id });
    if (findRoleController == null) {
        res.status(404).json({ "Error": true, "Message": "Not Found Role"})
    }
    else {
        const updatePost = await findAndUpdateRole({ _id: id }, update, { new: true});
        res.status(200).json({ "Error": false, "data": updatePost })
    }
}