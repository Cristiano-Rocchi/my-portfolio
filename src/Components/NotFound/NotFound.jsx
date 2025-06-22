import React from "react";
import "./NotFound.scss";

//img
import NotFoundImage from "../../Assets/Svg/NotFound.svg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="body not-found">
      <div className="d-flex justify-content-center align-items-center gap-5 ">
        {" "}
        <img src={NotFoundImage} alt="NOT FOUND" />
        <div className="title">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <div className="text-center mt-4">
            <Link to="/">
              {" "}
              <Button className="button-custom"> Torna alla Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
