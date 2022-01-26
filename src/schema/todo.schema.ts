import { boolean, object, string } from "yup";

const payload = {
    body: object ({
        name: string().required('Name is required'),
        description: string().required("Description is required")
    })
}

const params = {
    params: object({
        id: string().required("ID is required")
    })
}

export const createTodoSchema = object ({
    ...payload
})

export const deleteTodoSchema = object ({
    ...params
})

export const getTodoSchema = object ({
    ...params
})

export const updateTodoSchema = object ({
    ...params,
    ...payload
})

export const finishTodoSchema = object ({
    ...params
})