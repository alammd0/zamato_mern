import FoodReel from "../models/food-reel.model.js";
import Comment from "../models/comment.model.js";

export const commentFoodPost = async (req, res) => {
  try {
    const { foodReelId, text } = req.body;
    // const user = req.user;
    const userId = req.userId;

    if (!foodReelId) {
      return res.status(400).json({
        message: "Please provide food reel id",
      });
    }

    if (!text) {
      return res.status(400).json({
        message: "Please provide text",
      });
    }

    // create comment
    const newComment = await Comment.create({
      text,
      foodReel: foodReelId,
      user: userId,
    });

    await FoodReel.findByIdAndUpdate(foodReelId, {
      $inc: {
        commentCount: 1,
      },
    });

    return res.status(201).json({
      message: "Comment created successfully",
      comment: newComment,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getAllComments = async (req, res) => {
  try {
    const { foodReelId } = req.body;

    if (!foodReelId) {
      return res.status(400).json({
        message: "Please provide food reel id",
      });
    }

    const comments = await Comment.find({
      foodReel: foodReelId,
    }).populate("user", "fullname email");

    if (!comments) {
      return res.status(404).json({
        message: "Comments does not exist",
      });
    }

    return res.status(200).json({
      message: "Comments retrieved successfully",
      comments,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
