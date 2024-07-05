import mongoose from "mongoose";
const { Schema, model } = mongoose;
const paymentSchema = new Schema({
    name: { type: "string", required: true },
    to_user: { type: "string", required: true },
    oid: { type: "string", required: true },
    message: { type: "string" },
    amount: { type: "string", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: "boolean", default: false }
    // status: {type: String, enum: ['pending', 'completed', 'failed']}
})
const Payment= mongoose.models.Payment || model("Payment", paymentSchema); 
export default Payment;