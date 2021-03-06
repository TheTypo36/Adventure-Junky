import React from "react";
import { removeBlog } from "../actions";
import Blog from "./Blog";
const BlogPage = (props) => {
  const { blogs } = props;
  console.log("this is blog", blogs);
  const handleDeleteBlog = (id) => {
    console.log("inside deleting ", id);

    const newBlogs = blogs.filter((item) => item.blogId !== id);
    props.dispatch(removeBlog(newBlogs));
  };
  return (
    <div className="blog-page">
      {blogs.map((blogData, index) => {
        return (
          <Blog
            data={blogData}
            key={blogData.blogId}
            OnClickDelete={handleDeleteBlog}
          />
        );
      })}
    </div>
  );
};
export default BlogPage;
