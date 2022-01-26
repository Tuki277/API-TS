import { Express, Request, Response } from "express";
import { validateRequest} from "./middlewares";
import { createRoleSchema, deleteRoleSchema, updateRoleSchema } from './schema/role.schema'
import { createRoleController, deleteRoleController, getAllRoleController, updateRoleController } from './controllers/role.controller'
import { createPositionSchema, deletePositionSchema, updatePositionSchema } from "./schema/position.schema";
import { createPositionController, deletePositionController, getAllPositionController, updatePositionController } from "./controllers/position.controller";
import { createUser, deleteUser, updateUser } from "./schema/user.schema";
import { createUserController, updateUserController, deleteUserController, getAllUserController } from "./controllers/user.controller";
import { createUserSessionSchema, logoutUser } from "./schema/session.schema";
import { Login, Logout } from "./controllers/login.controller";
import { createTodoController, deleteTodoController, finishTodoController, getAllTodoController, getTodoByIdController, updateTodoController } from "./controllers/todo.controller";
import { createTodoSchema, deleteTodoSchema, finishTodoSchema, getTodoSchema, updateTodoSchema } from "./schema/todo.schema";


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

    //POST
    //create User
    // api/user
    app.post("/api/user", validateRequest(createUser), createUserController);

    //DELETE
    //Delete user
    // api/user
    app.delete("/api/user/:id", validateRequest(deleteUser), deleteUserController);

    //PUT
    //update a user
    // api/user
    app.put("/api/user/:id", validateRequest(updateUser), updateUserController);

    //GET
    //get a user
    // api/user
    app.get("/api/user", getAllUserController)

    //POST
    //login a user
    // api/login
    app.post("/api/login", validateRequest(createUserSessionSchema), Login)

    //POST
    //logout a user
    // api/logout
    app.post("/api/logout", validateRequest(logoutUser), Logout)

    //GET
    //get all todo
    // api/todo
    app.get("/api/todo", getAllTodoController)

    //GET
    //get todo by id
    // api/todo/:id
    app.get("/api/todo/:id", validateRequest(getTodoSchema), getTodoByIdController)

    //POST
    //create todo
    // api/todo
    app.post("/api/todo", validateRequest(createTodoSchema), createTodoController)

    //DELETE
    //delete todo
    // api/todo/:id
    app.delete("/api/todo/:id", validateRequest(deleteTodoSchema), deleteTodoController)

    //PUT
    //update todo
    // api/todo/:id
    app.put("/api/todo/:id", validateRequest(updateTodoSchema), updateTodoController)

    //POST
    //finish task
    // api/todo/finish/:id
    app.patch("/api/todo/finish/:id", validateRequest(finishTodoSchema), finishTodoController)
}