import React from "react";
import "./Projects.scss";
import { Col, Container, Row } from "react-bootstrap";
import Keyboard from "../../Assets/Svg/Keyboard.svg";

import prova from "../../Assets/Img/Websites/Siti/pizzamafiaComics.png";

const Projects = () => {
  return (
    <>
      <div className="body projects">
        <Container fluid>
          <Row>
            {/*----- TITOLO -----*/}
            <Col xs={12} md={5}>
              <div className="d-flex align-items-center">
                <div className="w-50 text-end">
                  <h1>
                    I MIEI <br />
                    PROGETTI
                  </h1>
                </div>
                <div className="w-50">
                  <img className="w-100" src={Keyboard} alt="" />
                </div>
              </div>
            </Col>
            {/*----- CARD prima riga -----*/}
            <Col xs={12} md={7}>
              <div className="d-flex justify-content-end gap-5 mb-5">
                {" "}
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
              </div>
            </Col>
          </Row>

          {/*----- CARD seconda riga -----*/}
          <Row>
            <Col xs={12}>
              <div className="d-flex gap-5 justify-content-end mb-5">
                {" "}
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
                <div className="card-project">
                  <img src={prova} alt="" />
                  <h5>Graffiti Bench</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Projects;
