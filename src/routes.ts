import { Express, Request, Response } from "express";
import validateRequest from "./middlewares/validateRole.middleware";
import { createRoleSchema } from './schema/role.schema'
import { createRoleController, getAllRoleController } from './controllers/role.controller'


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
}