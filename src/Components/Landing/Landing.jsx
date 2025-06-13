import React from "react";
import "./Landing.scss";
import "../../App.scss";
import { Col, Container, Row } from "react-bootstrap";
import HomeImg from "../../Assets/Img/Home/landing-img.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// Loghi
import html5 from "../../Assets/Img/Loghi/html5.png";
import css3 from "../../Assets/Img/Loghi/css3.png";
import js from "../../Assets/Img/Loghi/js.png";
import ts from "../../Assets/Img/Loghi/ts.png";

const Landing = () => {
  return (
    <>
      <div className="body">
        {/*----- PRIMA PARTE ------*/}
        <Container fluid className="landing">
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
              <div className="card-landing p-3">
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="fw-bold">SITI CHE GESTISCO</h5> <h4>+</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  officia pariatur quam architecto obcaecati
                </p>
              </div>
              <div className="card-landing p-3 mb-3">
                {" "}
                <div className="d-flex justify-content-between mb-2">
                  <h5 className="fw-bold">I MIEI PROGETTI</h5> <h4>+</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  officia pariatur quam architecto obcaecati
                </p>
              </div>
            </Col>
          </Row>{" "}
          {/* -----CAROSELLO------ */}
          <Row>
            <Col xs={12}>
              <Swiper
                slidesPerView={9}
                spaceBetween={30}
                autoplay={{
                  delay: 3000, // tempo in millisecondi tra ogni slide
                  disableOnInteraction: false, // continua anche se l'utente interagisce
                }}
                modules={[Autoplay]}
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
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <SwiperSlide>Slide 10</SwiperSlide>{" "}
                <SwiperSlide>Slide 11</SwiperSlide>{" "}
                <SwiperSlide>Slide 12</SwiperSlide>{" "}
                <SwiperSlide>Slide 13</SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Landing;
