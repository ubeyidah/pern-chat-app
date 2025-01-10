import { Request, Response, NextFunction } from "express";

interface HttpType extends Error {
  status?: number;
}

const errorHandler = (
  error: HttpType,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).json({
    success: false,
    data: null,
    error: { message },
  });
};

export default errorHandler;
