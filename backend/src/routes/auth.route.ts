import express from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller";

const route = express.Router();

route.post("/signUp", signUp);
route.post("/signIn", signIn);
route.post("/signOut", signOut);

export default route;
