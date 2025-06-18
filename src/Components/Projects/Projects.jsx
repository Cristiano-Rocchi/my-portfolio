import React from "react";
import "./Projects.scss";
import { Col, Container, Row } from "react-bootstrap";
import Keyboard from "../../Assets/Svg/Keyboard.svg";
import DataProjects from "./DataProjects";
import { Link } from "react-router-dom"; // ✅ Importa Link

const Projects = () => {
  const firstTwo = DataProjects.slice(0, 2);
  const remainingProjects = DataProjects.slice(2);

  return (
    <div className="body projects">
      <Container fluid>
        <Row>
          <Col xs={12} md={5}>
            <div className="d-flex align-items-center titles">
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

          {/* Prima riga */}
          <Col xs={12} md={7}>
            <div className="d-flex justify-content-end gap-5 mb-5 flex-wrap">
              {firstTwo.map((project) => (
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="card-project text-decoration-none text-dark"
                >
                  <img src={project.copertina} alt={project.titolo} />
                  <h5>{project.titolo}</h5>
                  <div className="card-overlay">
                    <p>{project.descrizioneBreve}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Col>
        </Row>

        {/* Seconda riga */}
        <Row>
          <Col xs={12}>
            <div className="d-flex  gap-4 mb-5 flex-wrap">
              {remainingProjects.map((project) => (
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="card-project text-decoration-none text-dark"
                >
                  {project.copertina && (
                    <img src={project.copertina} alt={project.titolo} />
                  )}
                  <h5>{project.titolo}</h5>
                  <div className="card-overlay">
                    <p>{project.descrizioneBreve}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
