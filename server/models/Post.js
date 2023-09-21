import mongoose from "mongoose";

const postSchhema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firtsName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      types: Array,
      default: [],
    },
  },
  { timestapms: true }
);

const Post = mongoose.model("Post", postSchhema);
