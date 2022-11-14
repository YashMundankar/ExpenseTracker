import  mongoose , { Schema } from "mongoose";

interface TransactionInterface{
    amount : number
    text : string
    createdAt : Date
}

const transactionShema:Schema<TransactionInterface>= new Schema<TransactionInterface>(
    {
        amount:{type:Number,required:true},
        text:{type:String,required:true},
        createdAt:{type:Date,required:true},
    },{timestamps:true})

const Transaction=mongoose.model("Transaction",transactionShema)

export default Transaction

