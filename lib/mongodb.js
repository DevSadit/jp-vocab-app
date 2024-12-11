import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("MongoDB connected");
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export default connectMongo;
