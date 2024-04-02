import dotenv from 'dotenv'
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB();
/*
import express from 'express'
const app = express()

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // Listener
        app.on("error", (error) => {
            console.log(`Not able to talk to the database`, error)
            throw error
        })
        // PORT
        app.listen(process.env.PORT, () => {
            console.log(`Server Running at port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error(`ERROR:`, error)
        throw error
    }
}

connectDB()

*/