import mongoose from "mongoose";

export const dbConnection = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connection(process.env.DB_URL)
}
