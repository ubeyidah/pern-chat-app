import express from "express";
import protectRoute from "../middleware/protectRoute";
import { sendMessage } from "../controllers/message.controller";

const route = express.Router();

route.post("/send/:id", protectRoute, sendMessage);
export default route;
