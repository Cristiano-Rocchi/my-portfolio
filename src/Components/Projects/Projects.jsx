import React from "react";
import "./Projects.scss";
import { Col, Container, Row } from "react-bootstrap";
import Pencil from "../../Assets/Svg/Pencil.svg";
import DataProjects from "./DataProjects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const firstTwo = DataProjects.slice(0, 2);
  const remainingProjects = DataProjects.slice(2);

  return (
    <div className="body projects">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} xl={5}>
            <motion.div
              className="d-flex align-items-center titles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.3,
              }}
            >
              <div className="w-50 text-end">
                <h1>
                  I MIEI <br />
                  PROGETTI
                </h1>
              </div>
              <div className="w-50">
                <img className="w-100" src={Pencil} alt="" />
              </div>
            </motion.div>
          </Col>

          {/* Prima riga */}
          <Col xs={12} md={12} xl={7}>
            <div className="d-flex justify-content-end gap-5 mt-5 flex-wrap">
              {firstTwo.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card-project "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.3, // 0s per il primo, 0.5s per il secondo
                    type: "spring",
                    stiffness: 90,
                    damping: 10,
                  }}
                >
                  <Link to={`/projects/${project.id}`}>
                    <img src={project.copertina} alt={project.titolo} />
                    <h5>{project.titolo}</h5>
                    <div className="card-overlay">
                      <p>{project.descrizioneBreve}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Seconda riga */}
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center gap-4 mb-5 flex-wrap">
              {remainingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card-project "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9 + index * 0.3,
                    type: "spring",
                    stiffness: 90,
                    damping: 10,
                  }}
                >
                  <Link to={`/projects/${project.id}`}>
                    {project.copertina && (
                      <img src={project.copertina} alt={project.titolo} />
                    )}
                    <h5>{project.titolo}</h5>
                    <div className="card-overlay">
                      <p>{project.descrizioneBreve}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
