import React from "react";

class Blog extends React.Component {
  render() {
    const { data, key, OnClickDelete } = this.props;
    let optionVisible = false;
    // console.log("data", data);
    const commentClickHandler = (event) => {
      const blog = event.target.parentElement.parentElement.parentElement;

      data.comments.comment.map((comment) => {
        console.log("blog", blog);
        return (blog.innerHTML += `<div class="comment">
                <div class="comment-user">
                ${comment.user}
                </div>
                <div class="comment-body">
                ${comment.body}
                </div>
                <div>`);
      });
    };

    const handleOptionClick = (event) => {
      const reallyTarget = event.target.parentElement.lastChild;
      if (optionVisible) {
        reallyTarget.style.display = "none";
        reallyTarget.style.border = "none";
        reallyTarget.style.backgroundColor = "transparent";
      } else {
        const styles = {
          display: "block",
          border: "#FFFFFF",
          backgroundColor: "#FFFFFF",
        };
        console.log(event.target.parentElement.lastChild.style);
        Object.assign(event.target.parentElement.lastChild.style, styles);
      }
      optionVisible = !optionVisible;
    };
    return (
      <div className="Blog">
        <div className="blog-main-heading">
          {data.title}
          <span className="options">
            <img
              src="https://cdn-icons-png.flaticon.com/512/70/70339.png"
              alt="options"
              onClick={handleOptionClick}
            />
            <div className="optionList">
              <ul>
                <li>
                  <div className="OptionContainer">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/2099/premium/2099085.png?token=exp=1654185068~hmac=320a548aa069cc22f011355eaffc3480"
                      alt="share"
                    />
                  </div>
                  <div>Share</div>
                </li>
                <li>
                  <div className="OptionContainer">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                      alt="edit"
                    />
                  </div>
                  <div>Edit</div>
                </li>
                <li onClick={() => OnClickDelete(data.blogId)}>
                  <div className="OptionContainer">
                    <img
                      src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1654184961~hmac=8a7dc794a6ea5bdfcbb7c283fb33bfb7"
                      alt="Delete"
                    />
                  </div>
                  <div>Delete</div>
                </li>
              </ul>
            </div>
          </span>
        </div>
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
          <div className="comment-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/13/13673.png"
              width="12px"
              alt="comment-btn"
              onClick={commentClickHandler}
            />
            <span className="comment-counter">
              {data.comments.commentCount}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
