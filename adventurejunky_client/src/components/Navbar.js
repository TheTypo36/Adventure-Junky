import React from "react";
import logo from "../images/logo.png";
const handleBlogClick = (event) => {
  event.preventDefault();
};
const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} className="logo" alt="logo" width="60" />
      <div className="heading">Adventure Junky</div>
      <div className="NavOptions">
        <div>
          <a href="">Blog</a>
        </div>
        <div>
          <a href="#">About Us</a>
        </div>
        <div>
          <a href="#">sign In/sign Up</a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
