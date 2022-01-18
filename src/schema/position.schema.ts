import { object, string } from 'yup';

const payload = {
    body: object({
        name: string().required("Name is required"),
    })
};

const params = {
    params: object({
        id: string().required("id is required"),
    }),
};

export const createPositionSchema = object({
    ...payload,
})

export const deletePositionSchema = object({
    ...params,
})

export const updatePositionSchema = object({
    ...params,
    ...payload
})