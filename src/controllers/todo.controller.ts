import {
    Request,
    Response
} from "express"
import {
    createTodo,
    deleteTodo,
    findAndUpdateTodo,
    findTodo,
    getAllTodo
} from "../services/Todo.service"

export const getAllTodoController = async (req: Request, res: Response) => {
    const Todo = await getAllTodo({
        valid: true
    });

    return res.status(200).json({
        "Error": false,
        "object": Todo
    })
}

export const createTodoController = async (req: Request, res: Response) => {
    const post = await createTodo({
        ...req.body
    })
    return res.status(201).json({
        "Error": false,
        "data": post
    })
}

export const deleteTodoController = async (req: Request, res: Response) => {
    const id = req.params.id;

    const findTodoToDelete = await findTodo({
        _id: id
    });
    if (findTodoToDelete == null) {
        return res.status(404).json({
            "Error": true,
            "Message": "Not Found"
        });
    } else {
        await deleteTodo(findTodoToDelete);
        return res.status(200).json({
            "Error": false,
            "Message": "Deleted"
        })
    }
}

export const updateTodoController = async (req: Request, res: Response) => {
    const id = req.params.id
    const update = req.body
    const findTodoToUpdate = await findTodo({
        _id: id
    });
    if (findTodoToUpdate == null) {
        return res.status(404).json({
            "Error": true,
            "Message": "Not Found"
        })
    } else {
        const updateTodo = await findAndUpdateTodo({
            _id: id
        }, update, {
            new: true
        })
        return res.status(200).json({
            "Error": false,
            "object": updateTodo
        })
    }
}

export const finishTodoController = async (req: Request, res: Response) => {
    const id = req.params.id
    const findTodoToUpdate = await findTodo({
        _id: id
    });
    if (findTodoToUpdate == null) {
        return res.status(404).json({
            "Error": true,
            "Message": "Not Found"
        })
    } else {
        const update = {
            "status": true
        }
        const updateTodo = await findAndUpdateTodo({
            _id: id
        }, update, {
            new: true
        })
        return res.status(200).json({
            "Error": false,
            "object": updateTodo
        })
    }
}

export const getTodoByIdController = async (req: Request, res: Response) => {
    const id = req.params.id
    const todoDetail = await findTodo({
        _id: id
    })
    if (todoDetail == null) {
        return res.status(404).json({
            "Error": true,
            "Message": "Not Found"
        });
    } else {
        return res.status(200).json({
            "Error": false,
            "object": todoDetail
        })
    }
}