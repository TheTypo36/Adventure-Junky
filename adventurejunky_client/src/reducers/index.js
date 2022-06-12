import { ADD_BLOGS, REMOVE_BLOG } from "../actions";

const initialState = {
  blogs: [],
};
export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOGS: {
      return {
        ...state,
        blogs: action.blogs,
      };
    }
    case REMOVE_BLOG: {
      return {
        ...state,
        blogs: action.blogs,
      };
    }

    default:
      return state;
  }
};
