import { AnySchema } from "yup";
import { Request, Response, NextFunction } from "express";
import log from "../logger"

const validateRequest = (Schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        });

        return next();
    } catch (error: any) {
        log.error(error);
        return res.status(400).json({ "Error": true, "Message": error.message });
    }
}

export default validateRequest;