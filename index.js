// Whenever Try To Engage With DB Use Async Await And Try Catch Or Promise 
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./src/db/dbconnect.js";

dotenv.config(
    { 
        path: "./env" 
    }
);

connectDB();

















/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/