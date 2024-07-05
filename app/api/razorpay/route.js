import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";
import User from "@/models/User";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

export const POST = async (req) => {
    await connectDB();
    let body = await req.formData();
    body = Object.fromEntries(body);

    //check if razor id is present in the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "order not found" });
    }

    let user=await User.findOne({username: p.to_user})
    const secret=user.razorpaysecret
    // console.log("user",user)
    // console.log("id",user.razorpayid)
    // console.log(secret)

    let isValid = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)//process.env.KEY_SECRET

    if (isValid) {
        // updated the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true });
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentDone=true`);
    }
    else {
        return NextResponse.json({ success: false, message: "payment verification failed" });
    }

}