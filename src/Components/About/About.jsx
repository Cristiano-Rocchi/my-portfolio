import React from "react";
import "./About.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

//svg
import Arrow from "../../Assets/Svg/arrow.svg";

import Me2 from "../../Assets/Svg/Me.svg";

const About = () => {
  return (
    <>
      <div className="body about">
        {" "}
        <Container fluid>
          <Row>
            <Col xs={12} lg={8}>
              <div className="title my-5">
                {" "}
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                >
                  <span>Fullstack Web Developer</span> con esperienza in
                  sviluppo frontend e backend, maturata attraverso progetti
                  intensivi individuali e di gruppo. <br />
                  <span>Creo applicazioni web</span> performanti e scalabili,
                  con attenzione all’esperienza utente e alla qualità del
                  codice. <br />
                  Lavoro con <span>passione</span>, <span>curiosità</span> e
                  <span> concretezza</span>.
                </motion.h2>
              </div>
              <div>
                <a
                  href="/Curriculum.pdf"
                  download
                  className="btn button-custom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Curriculum <img className="ms-2 mb-1" src={Arrow} alt="" />
                </a>
              </div>
              <div className="description d-flex justify-content-center align-items-center">
                <motion.div
                  className="w-75"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 60,
                    damping: 8,
                  }}
                >
                  <p>
                    Appassionato di musica e cultura urbana, ho creato una
                    piattaforma per catalogare la street art. <br /> Mi alleno
                    sollevando pesi (super serie incluse), mi diverto a smontare
                    e ricostruire UI, e adoro progettare strumenti che risolvono
                    problemi reali. <br /> Sono diretto, collaborativo e amo il
                    codice chiaro, ma senza rinunciare alla creatività.
                  </p>
                </motion.div>

                <motion.div
                  className="w-50"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.3,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 60,
                    damping: 8,
                  }}
                >
                  <strong>
                    <h5>Competenze:</h5>
                  </strong>
                  <p>
                    <strong>Frontend:</strong> React, Redux, JavaScript (ES6+),
                    HTML5, CSS3, Bootstrap, Sass, Responsive Design, Web
                    Animation
                  </p>
                  <p>
                    <strong>Backend:</strong> Java, Spring Boot, JPA, REST API,
                    PostgreSQL, JWT Auth, OOP
                  </p>
                  <p>
                    <strong>Strumenti & Extra:</strong> Git, GitHub, Vercel,
                    Netlify, Postman, Trello, npm, Cloudinary, OpenWeather API
                  </p>
                  <p>
                    <strong>Metodologia:</strong> Mobile First, Object-Oriented
                    Programming, Component-Based Architecture, API Integration,
                    Wireframing, Project Breakdown, Team collaboration
                  </p>
                </motion.div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <motion.div
                className="me"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3,
                }}
              >
                <img src={Me2} alt="" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
