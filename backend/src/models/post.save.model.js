import mongoose from "mongoose";

const PostSaveSchema = new mongoose.Schema({
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

PostSaveSchema.index({ post : 1, user : 1 }, { unique : true });

const PostSave = mongoose.model("PostSave", PostSaveSchema);
export default PostSave;