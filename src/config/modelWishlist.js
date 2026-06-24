import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
     supabase_product_id: {
        type: Number,
        required: true,
    },
    supabase_user_id: {
        type: String,
        required: true
    },
        created_at: {
        type: Date,
        default: Date.now
    }
});

export const wishlist = mongoose.model("Wishlist", wishlistSchema);