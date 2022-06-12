//action type
export const ADD_BLOGS = "ADD_BLOGS";
export const REMOVE_BLOG = "REMOVE_BLOG";

//action creators
export function addBlogs(blogs) {
  return {
    type: ADD_BLOGS,
    blogs: blogs,
  };
}
export function removeBlog(blogs) {
  return {
    type: REMOVE_BLOG,
    blogs,
  };
}
