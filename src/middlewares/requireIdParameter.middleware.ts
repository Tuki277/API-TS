import { Request, Response, NextFunction } from "express";

const requireIdParameter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const id = req.params.id

  if (!id) {
    return res.status(403).json({ "Error": false, "Message": "id is required"});
  }

  return next();
};

export default requireIdParameter;