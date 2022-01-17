import { object, string, number } from 'yup';

const payload = {
    body: object({
        name: string().required("Name is required"),
        roleNumber: number().required("Role is required")
    })
};

const params = {
    params: object({
        _id: string().required("id is required"),
    }),
};

export const createRoleSchema = object({
    ...payload,
})

export const deleteRoleSchema = object({
    ...params,
})

export const updateRoleSchema = object({
    ...params,
    ...payload
})