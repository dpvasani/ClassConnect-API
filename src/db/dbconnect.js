import mongoose from "mongoose";
import {DB_NAME} from "../../constant.js";

const connectDB = async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB Is Connected`)
        // console.log(`\n MongoDB Connected !! DB_HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Is Not Connected",error);
        process.exit(1);
    }
}

export default connectDB;