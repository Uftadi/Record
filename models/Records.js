import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    instrument: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    songs:[{
        title:{type: String, required: true},
        year:{type:Number, required: true}
   } ]
})

export const RecordModel = mongoose.model("Records", recordSchema)