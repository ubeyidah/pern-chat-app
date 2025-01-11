import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getMessages, sendMessage } from "../controllers/message.controller";

const route = express.Router();

route.post("/send/:id", protectRoute, sendMessage);
route.get("/:id", protectRoute, getMessages);
export default route;
