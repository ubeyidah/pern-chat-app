import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../utils/env.util";
import prisma from "../config/db.config";

interface DecodedType extends JwtPayload {
  id?: string;
}

declare global {
  namespace Express {
    export interface Request {
      userId?: string;
    }
  }
}
const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.chatToken;
    if (!token) {
      res.status(401).json({
        success: false,
        data: null,
        error: { message: "Unauthorized" },
      });
      return;
    }
    const decoded = jwt.verify(token, env("JWT_SECRET")) as DecodedType;
    if (!decoded.id) {
      res.status(401).json({
        success: false,
        data: null,
        error: { message: "Unauthorized" },
      });
      return;
    }
    const user = await prisma.user.findFirst({ where: { id: decoded.id } });
    if (!user) {
      res.status(404).json({
        success: false,
        data: null,
        error: { message: "user not found" },
      });
      return;
    }
    req.userId = user.id;
    next();
  } catch (error) {
    next(error);
  }
};

export default protectRoute;
