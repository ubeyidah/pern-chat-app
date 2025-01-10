import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../validations/auth.validation";
import prisma from "../config/db.config";
import { genTokenAndSetCookie, hashPassword } from "../utils/auth.utils";
import { getProfileUri } from "../utils/profile.util";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error, data } = signUpSchema.safeParse(req.body);
    if (error) {
      res.status(400).json({
        success: false,
        data: null,
        error: { message: error.errors[0].message },
      });
      return;
    }
    const isUserExist = await prisma.user.findFirst({
      where: { OR: [{ email: data.email }, { username: data.username }] },
    });
    if (isUserExist) {
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message:
            "The username or email you entered is already in use. Please choose a different one.",
        },
      });
      return;
    }
    const hashedPassword = await hashPassword(data.password);
    const profile = getProfileUri(data.gender, data.username);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        profile,
        gender: data.gender,
        username: data.username,
      },
    });
    const { password, ...userWithoutPassword } = user;
    genTokenAndSetCookie(res, user.id);
    res.status(201).json({
      success: true,
      data: { user: userWithoutPassword },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};
export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const signOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error);
  }
};
