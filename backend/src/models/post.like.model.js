import mongoose from "mongoose";

const PostLikeSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "FoodPost",
        required : true
    }
})

PostLikeSchema.index({ post : 1, user : 1 }, { unique : true });

const PostLike = mongoose.model("PostLike", PostLikeSchema);
export default PostLike;