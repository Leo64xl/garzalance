import { Schema, model } from "mongoose";
import { DiSafari } from "react-icons/di";

const imagesSchema =new Schema({
    nameUser: String,
    descripcion: String,
    price: Number,
    available:String,
    key: String,
    url: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})


export default model('Image', imagesSchema)





