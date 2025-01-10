import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Response } from "express";
import { env } from "./env.util";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const confirmPassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const genTokenAndSetCookie = (res: Response, id: string) => {
  const token = jwt.sign({ id }, env("JWT_SECRET"), { expiresIn: "20d" });
  res.cookie("chatToken", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 20 * 24 * 60 * 60 * 1000,
    secure: env("NODE_DEV") !== "dev",
  });
};
