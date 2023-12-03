import express from "express";
import { createOrder } from "../controller/orderController.js";

const router = express.Router();

router.post("/pesan", createOrder);

export default router;