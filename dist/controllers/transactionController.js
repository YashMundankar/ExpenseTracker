"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.addTransaction = exports.getAllTransactions = void 0;
const transaction_1 = __importDefault(require("../models/transaction"));
let getAllTransactions = (req, res) => {
    transaction_1.default.find()
        .then((result) => {
        res.status(200);
        res.send({ Transactions: result, TransactionsCount: result.length });
    })
        .catch((err) => {
        res.status(400);
        res.send({ detail: err });
    });
};
exports.getAllTransactions = getAllTransactions;
let addTransaction = (req, res) => {
    let transaction = new transaction_1.default(req.body);
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
exports.addTransaction = addTransaction;
let deleteTransaction = (req, res) => {
    let id = req.body.id;
    transaction_1.default.findByIdAndDelete(id)
        .then((result) => {
        res.status(200);
        res.send({ detail: `Transaction with id ${id} deleted.` });
    })
        .catch((err) => {
        res.status(400);
        res.send({ detail: err });
    });
};
exports.deleteTransaction = deleteTransaction;
