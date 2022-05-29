import React from "react";

class Blog extends React.Component {
  render() {
    const data = this.props.data;
    console.log("data", data);
    return (
      <div className="Blog">
        <div className="Main-heading">{data.title} </div>
        <div className="Header">
          <img src={data.img} alt="blog-img" />
          <div className="Blog-Details">
            By <span className="author-name">{data.author}</span>
            <span className="Creation-time">{data.time}</span>
          </div>
        </div>
        <div className="blog-body">{data.body}</div>
        <div className="Blog-action-icons">
          <div className="like-btn">
            <img src="" alt="like-btn" />
            <span>{data.like}</span>
          </div>
          <div className="dislike-btn">
            <img src="" alt="dislike-btn" />
            <span>{data.dislike}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
