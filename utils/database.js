import mongoose from 'mongoose'

let isConnected = false //track the connection
export const connectToDatabase = async()=>{

    if(isConnected){
        console.log('Already connected to database')
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "nextjs_project_db",
        })
        isConnected = true
        console.log('Connected to database')
    } catch (error) {
        console.error('Error connecting to database', error)
    }
}