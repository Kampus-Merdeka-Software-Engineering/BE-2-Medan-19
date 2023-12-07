import express from "express";
import { addToCart, removeCart, getCart } from "../controller/cartController.js";

const router = express.Router();

router.post('/cart/:menu_id', addToCart);
router.delete('/cart/:menu_id', removeCart);
router.get('/cart', getCart)

export default router;