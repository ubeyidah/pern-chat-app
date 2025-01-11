import { NextFunction, Request, Response } from "express";
import { signInSchema, signUpSchema } from "../validations/auth.validation";
import prisma from "../config/db.config";
import {
  confirmPassword,
  genTokenAndSetCookie,
  hashPassword,
} from "../utils/auth.utils";
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
    const { error, data } = signInSchema.safeParse(req.body);

    if (error) {
      res.status(400).json({
        success: false,
        data: null,
        error: { message: error.errors[0].message },
      });
      return;
    }
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.identifier }, { username: data.identifier }],
      },
    });
    if (!user) {
      res.status(404).json({
        success: false,
        data: null,
        error: {
          message:
            "The username or email you entered does not match any account. Please try again.",
        },
      });
      return;
    }
    const isMatchedPassword = await confirmPassword(
      data.password,
      user.password
    );
    if (!isMatchedPassword) {
      res.status(400).json({
        success: false,
        data: null,
        error: {
          message: "The password you entered is incorrect. Please try again.",
        },
      });
      return;
    }
    const { password, ...userWithoutPassword } = user;
    genTokenAndSetCookie(res, user.id);
    res.status(200).json({
      success: true,
      data: { user: userWithoutPassword },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("chatToken");
    res.status(200).json({
      success: true,
      error: null,
      data: { message: "signout successfully" },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.userId;
    const user = await prisma.user.findFirst({ where: { id } });
    if (!user) {
      res.status(404).json({
        success: false,
        data: null,
        error: { message: "user not found" },
      });
      return;
    }
    const { password, ...userWithoutPassword } = user!;
    res.status(200).json({
      success: true,
      data: { user: userWithoutPassword },
      error: null,
    });
  } catch (error) {
    next(error);
  }
};
