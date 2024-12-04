import mongoose from "mongoose";

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected Successfully To DB')
    } catch (error) {
        console.log('Connectin  Error', error.message)
    }
}

export default dbConnection;