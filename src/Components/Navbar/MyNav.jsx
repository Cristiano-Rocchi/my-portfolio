import React from "react";
import "./MyNav.scss";
import { Link } from "react-router-dom";
const MyNav = () => {
  return (
    <>
      <div className="my-nav d-flex justify-content-between align-items-center py-3 px-3">
        <div>
          <h6>My Portfolio</h6>
        </div>
        <div>
          <Link to="/">
            <h3>Cristiano Rocchi</h3>
          </Link>
        </div>
        <div>
          <h6>Fullstack Developer</h6>
        </div>
      </div>
    </>
  );
};
export default MyNav;
