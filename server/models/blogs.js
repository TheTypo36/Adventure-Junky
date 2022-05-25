import mongoose from "mongoose";
//create schema for blog
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});
//turning schema into model
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
