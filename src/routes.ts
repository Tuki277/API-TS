import { Express, Request, Response } from "express";
import { validateRequest} from "./middlewares";
import { createRoleSchema, deleteRoleSchema, updateRoleSchema } from './schema/role.schema'
import { createRoleController, deleteRoleController, getAllRoleController, updateRoleController } from './controllers/role.controller'
import { createPositionSchema, deletePositionSchema, updatePositionSchema } from "./schema/position.schema";
import { createPositionController, deletePositionController, getAllPositionController, updatePositionController } from "./controllers/position.controller";


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

    //POST
    //Create Position
    // api/Position
    app.post("/api/position", validateRequest(createPositionSchema), createPositionController)

    //GET
    //Get Position
    // api/Position
    app.get("/api/position", getAllPositionController)

    //DELETE
    //Delete Position
    // api/Position/:id
    app.delete("/api/position/:id", validateRequest(deletePositionSchema), deletePositionController)

    //PUT
    //Update a Position
    // api/Position/:id
    app.put("/api/position/:id", validateRequest(updatePositionSchema), updatePositionController)
}