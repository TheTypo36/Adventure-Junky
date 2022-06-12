const API_ROOT = "http://localhost:5000/";

export const API_URLS = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,

  blogs: (page, limit) => `${API_ROOT}/blogs?page=${page}&limig=${limit}`,
  createBlogs: (content) => `${API_ROOT}/users/create`,
  comment: () => `${API_ROOT}/comments`,
  deleteComment: (comment_id) => `${API_ROOT}/comment?comment_id=${comment_id}`,
  editUser: () => `${API_ROOT}/users/edit`,
  userInfo: (userId) => `${API_ROOT}/users/${userId}`,
};
export const LOCALSTORAGE_TOKEN_KEY = "__adventureJunky__";
