import { Express, Request, Response } from "express";
import { validateRequest} from "./middlewares";
import { createRoleSchema, deleteRoleSchema, updateRoleSchema } from './schema/role.schema'
import { createRoleController, deleteRoleController, getAllRoleController, updateRoleController } from './controllers/role.controller'


export default function (app: Express) {
    //Test route
    app.get("/test", (req: Request, res: Response) => res.sendStatus(200));

    //POST
    //Create role
    // api/role
    app.post("/api/role", validateRequest(createRoleSchema), createRoleController)

    //GET
    //Get role
    // api/role
    app.get("/api/role", getAllRoleController)

    //DELETE
    //Delete role
    // api/role/:id
    app.delete("/api/role/:id", validateRequest(deleteRoleSchema), deleteRoleController)

    //PUT
    //Update a role
    // api/role/:id
    app.put("/api/role/:id", validateRequest(updateRoleSchema), updateRoleController)
}