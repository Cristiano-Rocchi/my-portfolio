import React from "react";
import "./Websites.scss";
import MainImg from "../../Assets/Svg/WebsitesImg.svg";
import { Button } from "react-bootstrap";
//librerie
import { motion } from "framer-motion";

//img siti
import PizzamafiaComics from "../../Assets/Img/Websites/Siti/pizzamafiaComics.png";
import Isolotto from "../../Assets/Img/Websites/Siti/isolotto.png";
import Graffiti from "../../Assets/Img/Websites/Siti/graffitibench.png";
import { Link } from "react-router-dom";
//loghi
import Arrow from "../../Assets/Svg/arrow.svg";

const Websites = () => {
  return (
    <>
      <div className="body websites ">
        {/* TITLES */}
        <div className="d-flex justify-content-center align-items-center pt-4 titles">
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1>SITI CHE GESTISCO!</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique esse quis,
            </p>
          </motion.div>
          <motion.img
            src={MainImg}
            alt=""
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
        {/* CARDS */}
        <div className="d-flex justify-content-around align-items-center  pb-4 mt-2">
          <Link to={"https://isolotto-del-pirgo.vercel.app/"}>
            <motion.div
              className="card-site"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring", // molla
                stiffness: 90,
                damping: 7,
                duration: 1,
              }}
            >
              <img src={Isolotto} alt="" />
              <div className="info">
                <p className="m-2 fw-bold">Isolotto Del Pirgo</p>
                <Link
                  to={"https://github.com/Cristiano-Rocchi/isolotto-del-pirgo"}
                >
                  <Button>
                    Git-Hub{" "}
                    <span>
                      <img style={{ width: "25px" }} src={Arrow} alt="" />
                    </span>
                  </Button>
                </Link>
              </div>
              <h5>VISITA IL SITO</h5>
            </motion.div>
          </Link>
          <Link to={"https://pizzamafia.vercel.app/"}>
            <motion.div
              className="card-site"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 7,
                duration: 1,
                delay: 0.5,
              }}
            >
              {" "}
              <img src={PizzamafiaComics} alt="" />
              <div className="info">
                <p className="m-2 fw-bold">Pizzamafia Comics</p>
                <Link
                  to={
                    "https://github.com/Cristiano-Rocchi/pizzamafia-comics-site"
                  }
                >
                  <Button>
                    Git-Hub
                    <span>
                      <img style={{ width: "25px" }} src={Arrow} alt="" />
                    </span>
                  </Button>
                </Link>
              </div>
              <h5>VISITA IL SITO</h5>
            </motion.div>{" "}
          </Link>

          <motion.div
            className="card-site unactive"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 7,
              duration: 0.8,
              delay: 1,
            }}
          >
            <img src={Graffiti} alt="" />
            <div className="info">
              <p className="m-2 fw-bold">Graffiti Bench</p>
              <Button>
                Git-Hub{" "}
                <span>
                  <img style={{ width: "25px" }} src={Arrow} alt="" />
                </span>
              </Button>
            </div>
            <h5>INATTIVO</h5>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Websites;
