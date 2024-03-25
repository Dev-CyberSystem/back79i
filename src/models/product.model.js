import { Schema, model } from "mongoose";
import { imageRegex } from "../helpers/imageURLRegex.js";

const productSchema = new Schema({
    nombre : {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    categoria: {
        type : String,
        required: true,
        enum : ["Cafe", "Té"]
    },
    precio:{
        type : Number,
        required: true,
        min: 1,
        max: 1_000_000
    },
    imagen: {
        type : String,
        required: true,
        match: imageRegex
    }
},{
    timestamps: true
})

export default model ("Product", productSchema)