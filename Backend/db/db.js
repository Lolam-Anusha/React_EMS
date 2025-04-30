import mongoose from "mongoose"
import env from "dotenv"

env.config()

const connectToDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    }catch(err){
        console.log(err)
    }
}
export default connectToDatabase