import express from 'express';
import { getProducts, getProductById, getProductsByCategory, getCategories } from '../controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/categories').get(getCategories);
router.route('/category/:categoryId').get(getProductsByCategory);
router.route('/:id').get(getProductById);

export default router;
