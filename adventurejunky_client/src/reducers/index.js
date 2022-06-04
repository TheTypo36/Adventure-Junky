const initialState = {
  blogs: [],
};
export const AddBlogs = (state = initialState, action) => {
  if (action.type == "ADD_BLOGS") {
    return {
      ...state,
      blogs: action.blogs,
    };
  }
  return state;
};
