import React from "react";
import Blog from "./Blog";
class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [
        {
          title: "How to Escape world with a good Trip?",
          author: "Anand Raghuvanshi",
          like: 1122,
          comments: {
            commentCount: 5,
            comment: [
              { user: "anand", body: "nice blog" },
              { user: "ashish", body: "beautiful thought" },
              { user: "ankit", body: "incrediable" },
              { user: "ayush", body: "really, I didn't even know" },
              { user: "sumit", body: "nice thought" },
            ],
          },
          time: "29 May, 2022",
          body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
          blogId: 1,
        },
        {
          title: "How to Escape world with a good Trip?",
          Author: "Anand Raghuvanshi",
          like: 1122,
          comments: {
            commentCount: 5,
            comment: [
              { user: "anand", body: "nice blog" },
              { user: "ashish", body: "beautiful thought" },
              { user: "ankit", body: "incrediable" },
              { user: "ayush", body: "really, I didn't even know" },
              { user: "sumit", body: "nice thought" },
            ],
          },
          time: "29 May, 2022",
          body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
          blogId: 2,
        },
        {
          title: "How to Escape world with a good Trip?",
          Author: "Anand Raghuvanshi",
          like: 1122,
          comments: {
            commentCount: 5,
            comment: [
              { user: "anand", body: "nice blog" },
              { user: "ashish", body: "beautiful thought" },
              { user: "ankit", body: "incrediable" },
              { user: "ayush", body: "really, I didn't even know" },
              { user: "sumit", body: "nice thought" },
            ],
          },
          time: "29 May, 2022",
          body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
          blogId: 3,
        },
        {
          title: "How to Escape world with a good Trip?",
          Author: "Anand Raghuvanshi",
          like: 1122,
          comments: {
            commentCount: 5,
            comment: [
              { user: "anand", body: "nice blog" },
              { user: "ashish", body: "beautiful thought" },
              { user: "ankit", body: "incrediable" },
              { user: "ayush", body: "really, I didn't even know" },
              { user: "sumit", body: "nice thought" },
            ],
          },
          time: "29 May, 2022",
          body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
          blogId: 4,
        },
        {
          title: "How to Escape world with a good Trip?",
          author: "Anand Raghuvanshi",
          like: 1122,
          comments: {
            commentCount: 5,
            comment: [
              { user: "anand", body: "nice blog" },
              { user: "ashish", body: "beautiful thought" },
              { user: "ankit", body: "incrediable" },
              { user: "ayush", body: "really, I didn't even know" },
              { user: "sumit", body: "nice thought" },
            ],
          },
          time: "29 May, 2022",
          body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
          blogId: 5,
        },
      ],
    };
  }
  render() {
    console.log("hello inside blogpage");
    const handleDeleteBlog = (id) => {
      console.log("inside deleting ", id);
      const blogs = this.state.blogs;
      const newBlogs = blogs.filter((item) => item.blogId !== id);
      this.setState({
        blogs: newBlogs,
      });
    };
    return (
      <div className="blog-page">
        {this.state.blogs.map((blogData, index) => {
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
  }
}
export default BlogPage;
