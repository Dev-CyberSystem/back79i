import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/productos", getAllProducts);
router.get("/producto/:id", getProductById);
router.post("/product", createProduct)

export default router;
