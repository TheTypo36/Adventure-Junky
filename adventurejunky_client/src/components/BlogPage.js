import React from "react";
import Blog from "./Blog";
class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = [
      {
        title: "How to Escape world with a good Trip?",
        author: "Anand Raghuvanshi",
        like: 1122,
        comments: [],
        time: "29 May, 2022",
        body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
      },
      {
        title: "How to Escape world with a good Trip?",
        Author: "Anand Raghuvanshi",
        like: 1122,
        comments: [],
        time: "29 May, 2022",
        body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
      },
      {
        title: "How to Escape world with a good Trip?",
        Author: "Anand Raghuvanshi",
        like: 1122,
        comments: [],
        time: "29 May, 2022",
        body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
      },
      {
        title: "How to Escape world with a good Trip?",
        Author: "Anand Raghuvanshi",
        like: 1122,
        comments: [],
        time: "29 May, 2022",
        body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
      },
      {
        title: "How to Escape world with a good Trip?",
        author: "Anand Raghuvanshi",
        like: 1122,
        comments: [],
        time: "29 May, 2022",
        body: "So, as we all are born in this, adventure circle of 7 Hell, i.e is our life. Travelling can be proved as experincing havean.",
        img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/thumb-image_647_060515020243.jpg?size=770:433",
      },
    ];
  }
  render() {
    console.log("hello inside blogpage");
    return (
      <div className="blog-page">
        {this.state.map((blogData, index) => {
          return <Blog data={blogData} key={index} />;
        })}
      </div>
    );
  }
}
export default BlogPage;
