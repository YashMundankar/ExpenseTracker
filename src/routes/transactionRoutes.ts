import express from 'express';

import {
	getAllTransactions,
	addTransaction,
	deleteTransaction,
} from '../controllers/transactionController';

const router = express.Router();

router.get('/', getAllTransactions);

router.post('/', addTransaction);

router.delete('/', deleteTransaction);

export default router;
