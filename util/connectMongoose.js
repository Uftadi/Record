import mongoose from "mongoose";
import 'dotenv/config'
async function connectMongoose (){
    
    const uri = `mongodb+srv://${process.env.User}:${process.env.Password}@${process.env.Cluster}/${process.env.Database}?retryWrites=true&w=majority`;
    
    try {
        await mongoose.connect(uri)
        const collections = (await mongoose.connection.db.listCollections().toArray()).map(el => el.name)
        console.log(collections)
        return true
        
    } catch (error) {
        console.log('could not connect to mongoose', error)
    }
    
}

export default connectMongoose