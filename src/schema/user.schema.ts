import { object, ref, string } from "yup";

const payload = {
    body: object ({
        username: string().required("Name is required"),
        password: string().required("Password is required")
                    .min(6, "Password is too short - should be 6 chars minimum.")
                    .matches(/^[a-zA-Z0-9_@=.-]*$/, "Password can only contain Latin letters."),
        passwordConfirmation: string().oneOf( [ref("password"), null], "Passwords must match"),
        email: string().email("Must be a valid email").required("Email is required"),
        role: string().required("Role is required"),
        position: string().required("Position is required")
    })
}

const params = {
    params: object ({
        id: string().required("id is required")
    })
}

export const createUser = object ({
    ...payload
})

export const deleteUser = object ({
    ...params
})

export const updateUser = object ({
    ...params,
    ...payload
})