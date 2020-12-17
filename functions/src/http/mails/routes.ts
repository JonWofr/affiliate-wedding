import { Router } from "express";
import { sendMail } from "./controller";

export const router = Router();

router.post("/send-mail", sendMail);
