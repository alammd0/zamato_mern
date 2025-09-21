import mongoose from "mongoose";

const PostCommentSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },

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

PostCommentSchema.index({ post : 1, user : 1 }, { unique : true });

const PostComment = mongoose.model("PostComment", PostCommentSchema);
export default PostComment; 