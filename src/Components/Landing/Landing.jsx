import React from "react";
import "./Landing.scss";
import "../../App.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import HomeImg from "../../Assets/Svg/Landing-img.svg";
import ContactImg from "../../Assets/Img/Home/contactImg.webp";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
// Loghi
import html5 from "../../Assets/Svg/loghi/html5.svg";
import css3 from "../../Assets/Svg/loghi/css3.svg";
import js from "../../Assets/Svg/loghi/js.svg";
import ts from "../../Assets/Svg/loghi/ts.svg";
import Rct from "../../Assets/Svg/loghi/react.svg";
import Redux from "../../Assets/Svg/loghi/redux.svg";
import Sass from "../../Assets/Svg/loghi/sass.svg";
import Java from "../../Assets/Svg/loghi/java.svg";
import Spring from "../../Assets/Svg/loghi/spring.svg";
import Maven from "../../Assets/Svg/loghi/maven.svg";
import Pg from "../../Assets/Svg/loghi/pg.svg";
import Github from "../../Assets/Svg/loghi/github.svg";
import Git from "../../Assets/Svg/loghi/git.svg";
import Jest from "../../Assets/Svg/loghi/jest.svg";
import jwt from "../../Assets/Svg/loghi/jwt.svg";
import Bstrap from "../../Assets/Svg/loghi/bootstrap.svg";
import Hibernate from "../../Assets/Svg/loghi/hibernate.svg";
import Cloudinary from "../../Assets/Svg/loghi/cloudinary.svg";
import Backblaze from "../../Assets/Svg/loghi/backblaze.svg";
import Njs from "../../Assets/Svg/loghi/njs.svg";
import ReactRouter from "../../Assets/Svg/loghi/react-router.svg";
import Netlify from "../../Assets/Svg/loghi/netlify.svg";
import Vercel from "../../Assets/Svg/loghi/vercel.svg";
import Figma from "../../Assets/Svg/loghi/figma.svg";
//svg
import In from "../../Assets/Svg/in.svg";
import Phone from "../../Assets/Svg/phone.svg";
import Arrow from "../../Assets/Svg/arrow.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="body landing">
        {/*----- PRIMA PARTE ------*/}
        <Container fluid>
          <Row>
            <Col
              xs={12}
              md={8}
              className="border-bottom border-2 border-danger"
            >
              <div className="text-center">
                <img src={HomeImg} alt="" />
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column justify-content-end gap-4"
            >
              <Link to={"/websites"}>
                <div className="card-landing p-3">
                  <div className="d-flex justify-content-between mb-2">
                    <h4 className="fw-bold">SITI CHE GESTISCO</h4>{" "}
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus officia pariatur quam architecto obcaecati
                  </p>
                </div>
              </Link>
              <Link to={"/projects"}>
                <div className="card-landing p-3 mb-3">
                  {" "}
                  <div className="d-flex justify-content-between mb-2">
                    <h4 className="fw-bold">I MIEI PROGETTI</h4>{" "}
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus officia pariatur quam architecto obcaecati
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
          {/* -----CAROSELLO------ */}
          <Row>
            <Col xs={12}>
              <Swiper
                slidesPerView="10"
                spaceBetween={30}
                loop={true}
                freeMode={true}
                speed={4000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
                className="my-swiper"
              >
                <SwiperSlide>
                  <img className="w-50" src={html5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={css3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={js} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={ts} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Rct} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Redux} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Sass} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Java} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Spring} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Maven} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <img className="w-50" src={Pg} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <img className="w-50" src={Github} alt="" />
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <img className="w-50" src={Git} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Bstrap} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Hibernate} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Cloudinary} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Backblaze} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Njs} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Vercel} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Jest} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={jwt} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={ReactRouter} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Netlify} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-50" src={Figma} alt="" />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>

          <Row>
            {/* -----CONTATTI------ */}
            <Col xs={12} md={8}>
              <div className="contatti-card p-3  mb-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="fw-bold mb-4">CONTATTI</h4>
                    <div className="d-flex gap-4">
                      <a href="mailto:cri.wklavoro@libero.it">
                        <Button className="button-custom">
                          Posta Elettronica
                          <img className="ms-2 mb-1" src={Arrow} alt="" />
                        </Button>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/cristiano-rocchi-83bb1032a/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img className="ms-3" src={In} alt="Linkedin" />
                      </a>

                      <a href="tel:3515630200">
                        <img src={Phone} alt="Phone" />
                      </a>
                    </div>
                  </div>
                  <div className="me-5">
                    <img src={ContactImg} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            {/* -----ABOUT ME------ */}
            <Col xs={12} md={4}>
              <Link to={"/aboutme"}>
                <div className="about-card p-3">
                  <div className="d-flex justify-content-between">
                    <h4 className="fw-bold mb-2">ABOUT ME</h4>{" "}
                    <div>
                      <img src={Arrow} alt="" />
                    </div>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus officia pariatur quam architecto obcaecati, cumque
                    voluptatibus,
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Landing;
