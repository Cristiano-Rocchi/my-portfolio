import React from "react";
import "./About.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
//svg
import Arrow from "../../Assets/Svg/arrow.svg";
import Me from "../../Assets/Img/About/me.jpg";
import Me2 from "../../Assets/Svg/Me.svg";

const About = () => {
  return (
    <>
      <div className="body about">
        {" "}
        <Container fluid>
          <Row>
            <Col xs={8}>
              <div className="title my-5">
                {" "}
                <h2>
                  <span>Fullstack Web Developer</span> con esperienza in
                  sviluppo frontend e backend, maturata attraverso progetti
                  intensivi individuali e di gruppo. <br />{" "}
                  <span>Creo applicazioni web</span> performanti e scalabili,
                  con attenzione all’esperienza utente e alla qualità del
                  codice. <br /> Lavoro con <span>passione</span>,{" "}
                  <span>curiosità</span> e <span>concretezza</span>.
                </h2>
              </div>
              <div>
                <Button>
                  Curriculum <img className="ms-2 mb-1" src={Arrow} alt="" />
                </Button>
              </div>
              <div className="description d-flex justify-content-center align-items-center">
                <div className="w-75">
                  <p>
                    Appassionato di musica e cultura urbana, ho creato una
                    piattaforma per catalogare la street art. <br /> Mi alleno
                    sollevando pesi (super serie incluse), mi diverto a smontare
                    e ricostruire UI, e adoro progettare strumenti che risolvono
                    problemi reali. <br /> Sono diretto, collaborativo e amo il
                    codice chiaro, ma senza rinunciare alla creatività.
                  </p>
                </div>
                <div className="w-50">
                  <h5>Competenze</h5>
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
                </div>
              </div>
            </Col>
            <Col xs={4}>
              <div className="me">
                {" "}
                <img src={Me2} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
