"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const transaction_1 = __importDefault(require("./models/transaction"));
const dbURI = "mongodb+srv://yashmundankar:yash123@nodepractice.k6owukd.mongodb.net/?retryWrites=true&w=majority";
const app = (0, express_1.default)();
mongoose_1.default.connect(dbURI).then((result) => app.listen(3000, () => console.log('Server Running'))).catch((err) => console.log(err));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.sendFile("./views/Home.html", { root: __dirname });
});
app.get("/transactions", (req, res) => {
    transaction_1.default.find().then((result) => res.send({ Transactions: result, TransactionsCount: result.length })).catch((err) => res.send(err));
});
app.post("/transactions", (req, res) => {
    let transaction = new transaction_1.default(req.body);
    transaction
        .save()
        .then((result) => console.log("Transaction Processed"))
        .catch((err) => console.log(err));
});
app.delete("/transactions", (req, res) => {
    let id = req.body.id;
    transaction_1.default
        .findByIdAndDelete(id)
        .then((result) => console.log("Transaction Processed"))
        .catch((err) => console.log(err));
});
