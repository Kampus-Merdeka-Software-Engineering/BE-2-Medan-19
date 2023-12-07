import express from "express";
import { createOrder, getOrder } from "../controller/orderController.js";

const router = express.Router();

router.post('/order', createOrder);
router.get('/order', getOrder)

export default router;