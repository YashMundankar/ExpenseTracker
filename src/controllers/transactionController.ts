import Transaction from "../models/transaction";
import { Request, Response } from "express";

let getAllTransactions = (req: Request, res: Response) => {
	Transaction.find()
		.then((result) => {
			res.status(200);
			res.send({ Transactions: result, TransactionsCount: result.length });
		})
		.catch((err) => {
			res.status(400);
			res.send({ detail: err });
		});
};

let addTransaction = (req: Request, res: Response) => {
	let transaction = new Transaction(req.body);
	transaction
		.save()
		.then((result) => {
			res.status(200);
			res.send({ detail: "Transaction added successfully !" });
		})
		.catch((err) => {
			res.status(400);
			res.send({ detail: err });
		});
};

let deleteTransaction = (req: Request, res: Response) => {
	let id = req.body.id;
	Transaction.findByIdAndDelete(id)
		.then((result) => {
			res.status(200);
			res.send({ detail: `Transaction with id ${id} deleted.` });
		})
		.catch((err) => {
			res.status(400);
			res.send({ detail: err });
		});
};

export { getAllTransactions, addTransaction, deleteTransaction };
