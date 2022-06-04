import React from "react";
import Navbar from "./Navbar";
import { AddBlogs } from "../reducers";
import BlogPage from "./BlogPage";
import blogs from "../data";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch({
      type: "ADD_BLOGS",
      blogs: blogs,
    });
  }
  render() {
    const blogs = this.props.store.getState().blogs;
    return (
      <React.Fragment>
        <Navbar />
        <BlogPage blogs={blogs} />
      </React.Fragment>
    );
  }
}

export default App;
