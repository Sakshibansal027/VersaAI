import express from "express";
import {
  createConversation,
  getConversations,
  getMessage,
  saveMessage,
  updateConversation,
} from "../controllers/chat.controller.js";
const router = express.Router();
router.get("/create", createConversation);
router.get("/get-conversations", getConversations);
router.post("save-message", saveMessage);
router.get("get-message/:conversationId", getMessage);
router.post("/update-conversation", updateConversation);
export default router;
