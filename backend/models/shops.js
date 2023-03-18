import mongoose from 'mongoose'

const shopSchema = new mongoose.Schema({
    shopName :{
        type:String,
        required:true, 
        trim:true
    },
    
    visitorCount : {
        default : 0
    }

},{timestamps:true});

export default mongoose.model("Shop", shopSchema);