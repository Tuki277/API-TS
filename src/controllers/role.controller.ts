import { Request, Response } from "express";
import { createRole, findAndUpdateRole, deleteRole, getAllRole} from "../services/role.service";
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