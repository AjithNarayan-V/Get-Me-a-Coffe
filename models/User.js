import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: { type: String },
    razorpaysecret: { type: String },
    userrole: { type: String},
    userlocation: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

})
const user= mongoose.models.User || model("User", UserSchema);
export default user;    