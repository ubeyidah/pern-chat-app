import express from "express";
import { getMe, signIn, signOut, signUp } from "../controllers/auth.controller";
import protectRoute from "../middleware/protectRoute";

const route = express.Router();

route.post("/signUp", signUp);
route.post("/signIn", signIn);
route.post("/signOut", signOut);
route.get("/me", protectRoute, getMe);

export default route;
