import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    supabase_product_id: {
        type: Number,
        required: true,
    },
    supabase_user_id: {
        type: String,
        required: true
    },
    user_name:{
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    comment: {
        type: String,
        default: "",
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export const Review = mongoose.model("Review", reviewSchema)