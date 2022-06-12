//package import
import React from "react";

//file imports
import Navbar from "./Navbar";
import BlogPage from "./BlogPage";
import blogs from "../data";
import { addBlogs } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch(addBlogs(blogs));
  }
  render() {
    const blogs = this.props.store.getState().blogs;
    return (
      <React.Fragment>
        <Navbar />
        <BlogPage blogs={blogs} dispatch={this.props.store.dispatch} />
      </React.Fragment>
    );
  }
}

export default App;
