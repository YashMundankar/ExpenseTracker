import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import transactionRoutes from "./routes/transactionRoutes";

const dbURI =
	"mongodb+srv://yashmundankar:yash123@nodepractice.k6owukd.mongodb.net/?retryWrites=true&w=majority";

const app: Application = express();
mongoose
	.connect(dbURI)
	.then((result) => app.listen(3000, () => console.log("Server Running")))
	.catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile("./views/Home.html", { root: __dirname });
});

app.use("/transactions", transactionRoutes);
