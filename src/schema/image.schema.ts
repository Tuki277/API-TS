import { object, ref, string } from "yup";

const payload = {
    body: object ({
        title: string().required("Name is required"),
        fileUpload: string().required("Image is required")
    })
}

export const createImageSchema = object ({
    ...payload
})