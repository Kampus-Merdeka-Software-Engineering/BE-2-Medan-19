import express from "express";
import { getMenu,addMenu, deleteMenu } from "../controller/menuController.js";

const router = express.Router();

router.post('/menu', addMenu);

router.get('/menu', getMenu);

router.delete('/menu/:menuId', deleteMenu);

export default router;