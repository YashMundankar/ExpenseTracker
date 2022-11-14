import express ,{Application,Request,Response} from 'express'
import mongoose from 'mongoose';
import Transaction from './models/transaction';

const dbURI =
	"mongodb+srv://yashmundankar:yash123@nodepractice.k6owukd.mongodb.net/?retryWrites=true&w=majority";


const app: Application=express();
mongoose.connect(dbURI).then((result)=>app.listen(3000,()=>console.log('Server Running'))).catch((err)=>console.log(err))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile("./views/Home.html", { root: __dirname });
	
});
app.get("/transactions", (req, res) => {
    Transaction.find().then((result)=>res.send({Transactions:result,TransactionsCount:result.length})).catch((err)=>res.send(err))
	
});

app.post("/transactions", (req, res) => {
	let transaction = new Transaction(req.body);
	transaction
		.save()
		.then((result) => console.log("Transaction Processed"))
		.catch((err) => console.log(err));
});

app.delete("/transactions", (req, res) => {
	let id=req.body.id
	Transaction
		.findByIdAndDelete(id)
		.then((result) => console.log("Transaction Processed"))
		.catch((err) => console.log(err));
});

