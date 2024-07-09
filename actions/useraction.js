"use server"
import connectDB from "@/db/connectDB"
import Payment from "@/models/Payment"
import User from "@/models/User"
import Razorpay from "razorpay"
    

export const initiate = async (amount, to_username, Paymentform) => {
    await connectDB()
    let user = await User.findOne({ username: to_username})
    const secret=user.razorpaysecret
    var instance = new Razorpay({ key_id:user.razorpayid, key_secret:secret })// process.env.NEXT_PUBLIC_KEY_ID, process.env.KEY_SECRET

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)
    // console.log('Order created:', x);

    //create a payment object that show pending orders
    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: Paymentform.name, message: Paymentform.message })
    return x

}

// export const fetchUser = async (username) => {
//     await connectDB()
//     let user = await User.findOne({ username: username })
//     user = user.toObject({ flattenObjectIds: true })
//     console.log("userdata:", user)
//     return user
// }
export const fetchUser = async (username) => {
    await connectDB();
    let user = await User.findOne({ username: username });
    if (!user) {
      console.log("User not found");
      return null;
    }
    user = user.toObject({ flattenObjectIds: true });
    // console.log("userdata:", user);
    return user;    
  };

export const fetchPayment = async (username) => {
    await connectDB()
    //find all the payment sorted by decreasing order of amount and flatte
    let payments = await Payment.find({ done: "true" ,to_user:username}).sort({ amount: -1 }).limit(10).lean()
    // console.log("paymentdata:", payments)
    return payments
}

export const updateProfile = async (data, oldusername) => {
    
    await connectDB()
    // let data = Object.fromEntries(data)
    console.log("db connected")
    //update the user profile with new data and if user name available  
    if (oldusername !== data.username) {
        let check = await User.findOne({ username: data.username })
        if (check) {
            throw new Error("Username already exists")
        }
        await User.updateOne({ email: data.email }, data)
        await Payment.updateMany({to_user:oldusername}, {to_user:data.username})
        
    }
    else{
        await User.updateOne({ email: data.email }, data)

    }

}