import mongoose, { Schema } from "mongoose";

//create schema for blog
const blogSchema = new Schema({
  title: {
    type: string,
    required: true,
  },
  body: {
    type: string,
    required: true,
  },
  author: {
    type: string,
    required: true,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: date,
    default: new Date(),
  },
});
//turning schema into model
const Blog = new mongoose.Schema("Blog", blogSchema);
export default Blog;
