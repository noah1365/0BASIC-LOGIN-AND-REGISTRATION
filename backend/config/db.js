import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB);
        console.log(`MongoDB connected successfully! ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting Database ${error}`);
        process.exit(1);
    }
};