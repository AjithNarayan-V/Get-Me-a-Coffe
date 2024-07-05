import mongoose from "mongoose";
// const connectDB = async () => {
//     try {
//       const conn = await mongoose.connect("mongodb://localhost:27017/chai", {
//         useNewUrlParser: true,
//       });
//       console.log(`MongoDB Connected: {conn.connection.host}`);
//     } catch (error) {
//       console.log("----------------wtf")
//       console.error(error.message);
//       process.exit(1);
//     }
//   }
//   export default connectDB;
// Database connection

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // If already connected
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/chai", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;