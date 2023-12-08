import express from "express";
import { addToCart, removeCart, getCart, deleteCart } from "../controller/cartController.js";

const router = express.Router();

router.post('/cart/:menu_id', addToCart);
router.delete('/cart/:menu_id', removeCart);
router.get('/cart', getCart);
router.delete('/cart', deleteCart);

export default router;