import { object, string } from "yup";

export const createUserSessionSchema = object ({
    body: object ({
        password: string().required("Password is required")
                // .min(6, "Password is too short - should be 6 chars minimum.")
                .matches(/^[a-zA-Z0-9_@=.-]*$/, "Password can only contain Latin letters."),
        email: string().email("Must be a valid email").required("Email is required")
    })
})

export const logoutUser = object ({
    body: object ({
        session: string().required("Session is required")
    })
})

const params = {
    params: object ({
        sessionId: string().required("SessionId is required")
    })
}

export const getUserprofileBySessionIdSchema = object ({
    ...params
})

export const getAllSessions = object ({
    ...params
})