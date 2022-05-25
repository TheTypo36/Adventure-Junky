import Blog from "../models/blogs.js";

export const getBlogs = async function (req, res) {
  try {
    const AllBlogs = await Blog.find();
    console.log(AllBlogs);
    res.status(200).json(AllBlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createBlog = async function (req, res) {
  const blog = req.body;
  const newBlog = new Blog(blog);
  try {
    await newBlog.save();
    // code 201 => req is successfully executed and led to creation of some resource.
    res.status(201).json(newBlog);
  } catch (error) {
    //code 409 => the request can't be processed  because of conflict of req.
    res.status(409).json(error.message);
  }
};
