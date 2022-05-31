import React from "react";

class Blog extends React.Component {
  render() {
    const data = this.props.data;
    console.log("data", data);
    return (
      <div className="Blog">
        <div className="blog-main-heading">{data.title} </div>
        <div className="Blog-Details">
          By <span className="author-name">{data.author}</span>
          <span className="Creation-time"> {data.time}</span>
        </div>
        <div className="blog-header">
          <img src={data.img} alt="blog-img" />
        </div>
        <div className="blog-body">{data.body}</div>
        <div className="Blog-action-icons">
          <div className="like-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
              alt="like-btn"
              width="12px"
            />
            <span>{data.like}</span>
          </div>
          <div className="dislike-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
              width="12px"
              alt="dislike-btn"
            />
            <span>{data.dislike}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
