import mongoose from "mongoose";

const dbConnection = async () => {
    mongoose
        .connect(process.env.MONGO_URI, {dbName: "business-registration-form", family:4} )
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {  
            console.error("MongoDB connection failed:", error.message);
            
        })
}

export default dbConnection;
