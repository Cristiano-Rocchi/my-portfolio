import { useParams } from "react-router-dom";
import { useState } from "react";
import DataProjects from "../Projects/DataProjects";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProjectDetail.scss";
import Mouse from "../../Assets/Svg/mouse.svg";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = DataProjects.find((p) => p.id === id);
  // Stati immagini dinamiche
  const [copertina, setCopertina] = useState(project?.copertina);
  const [img1, setImg1] = useState(project?.img1);
  const [img2, setImg2] = useState(project?.img2);
  const isMobile = window.innerWidth < 768;

  //funzioni
  // Funzione per lo scambio tra copertina e immagine secondaria
  const handleSwap = (img, setImg) => {
    if (img === copertina) return;
    const temp = copertina;
    setCopertina(img);
    setImg(temp);
  };

  if (!project) {
    return <div className="text-center mt-5">Progetto non trovato</div>;
  }

  return (
    <>
      <div className="body project-detail">
        <Container fluid>
          <Row>
            <Col xs={12} lg={5}>
              {" "}
              <div className="d-flex align-items-center justify-content-start title ms-5">
                <div className="d-flex flex-column">
                  <h1 className="mt-5">{project.titolo}</h1>
                  {project.github2 ? (
                    <Tippy
                      content={
                        <div className="d-flex flex-column">
                          <a
                            href={project.github1}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-custom"
                          >
                            GitHub Backend
                          </a>
                          <a
                            href={project.github2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-custom mt-3"
                          >
                            GitHub Frontend
                          </a>
                        </div>
                      }
                      interactive={true}
                      placement="right"
                      arrow={true}
                      trigger="click"
                      hideOnClick={true}
                      className="custom-tippy"
                    >
                      <Button className="mt-5 button-custom">Git-Hub</Button>
                    </Tippy>
                  ) : (
                    <a
                      href={project.github1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <Button className="mt-5">Git-Hub</Button>
                    </a>
                  )}
                </div>

                <img src={Mouse} alt="" />
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <motion.div
                className="d-flex justify-content-end cover"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 7,
                  duration: 0.8,
                }}
              >
                <img
                  src={copertina}
                  alt=""
                  onClick={() => {
                    if (copertina === project.img1) {
                      handleSwap(project.img1, setImg1);
                    } else if (copertina === project.img2) {
                      handleSwap(project.img2, setImg2);
                    }
                  }}
                />
              </motion.div>

              <div className="border-bottom border-2 border-danger mt-3"></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={5}>
              <div className="description mb-5">
                <div
                  style={{ whiteSpace: "normal" }}
                  dangerouslySetInnerHTML={{ __html: project.descrizioneLunga }}
                ></div>
              </div>
            </Col>
            <Col xs={12} lg={7}>
              <div className="d-flex justify-content-end mt-5 images">
                <motion.div
                  className="project-card w-50"
                  onClick={() => {
                    if (!isMobile) handleSwap(img1, setImg1);
                  }}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 7,
                    duration: 0.8,
                  }}
                >
                  <img src={img1} alt="" />
                </motion.div>

                <motion.div
                  className="project-card"
                  onClick={() => {
                    if (!isMobile) handleSwap(img2, setImg2);
                  }}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 7,
                    duration: 0.8,
                  }}
                >
                  <img src={img2} alt="" />
                </motion.div>
              </div>
              {project.videoUrl && (
                <motion.div
                  className="video-project d-flex justify-content-center ms-5 my-5"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 7,
                    duration: 0.8,
                  }}
                >
                  <video controls width="100%">
                    <source src={project.videoUrl} type="video/mp4" />
                    Il tuo browser non supporta il video.
                  </video>
                </motion.div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectDetail;
