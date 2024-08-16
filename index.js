// Whenever Try To Engage With DB Use Async Await And Try Catch Or Promise 
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./src/db/dbconnect.js";
import express from 'express';
const app = express();
app.use(express.json());
// require('dotenv').config();

dotenv.config(
    { 
        path: "./.env" 
    }
);

connectDB();


const teacherRoutes = require('./src/routes/teacherRoutes');
const classroomRoutes = require('./src/routes/classroomRoutes');
const studentRoutes = require('./src/routes/studentRoutes');


app.use('/api/teachers', teacherRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


















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