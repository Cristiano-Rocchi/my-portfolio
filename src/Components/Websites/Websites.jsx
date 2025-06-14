import React from "react";
import "./Websites.scss";
import MainImg from "../../Assets//Svg/WebsitesImg.svg";
import { Button } from "react-bootstrap";

const Websites = () => {
  return (
    <>
      <div className="body websites ">
        {/* TITLES */}
        <div className="d-flex justify-content-center align-items-center pt-4 titles">
          <div>
            <h1>SITI CHE GESTISCO!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique esse quis,
            </p>
          </div>
          <img src={MainImg} alt="" />
        </div>
        {/* CARDS */}
        <div className="d-flex justify-content-center align-items-center gap-5 pb-4 mt-2">
          <div className="card-site">
            <img
              src="https://www.cosedicomputer.com/wp-content/uploads/cosa-sono-i-siti-internet.jpg"
              alt=""
            />
            <div className="info">
              <p className="m-1 fw-bold">ISOLOTTO DEL PIRGO</p>
              <Button>Git-Hub</Button>
            </div>
          </div>
          <div className="card-site">
            <img
              src="https://www.cosedicomputer.com/wp-content/uploads/cosa-sono-i-siti-internet.jpg"
              alt=""
            />
          </div>
          <div className="card-site">
            <img
              src="https://www.cosedicomputer.com/wp-content/uploads/cosa-sono-i-siti-internet.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Websites;
