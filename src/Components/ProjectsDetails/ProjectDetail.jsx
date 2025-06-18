import { useParams } from "react-router-dom";
import { useState } from "react";
import DataProjects from "../Projects/DataProjects";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProjectDetail.scss";
import Mouse from "../../Assets/Svg/mouse.svg";

function ProjectDetail() {
  const { id } = useParams();
  const project = DataProjects.find((p) => p.id === id);
  // Stati immagini dinamiche
  const [copertina, setCopertina] = useState(project?.copertina);
  const [img1, setImg1] = useState(project?.img1);
  const [img2, setImg2] = useState(project?.img2);

  //funzioni
  // Funzione per lo scambio tra copertina e immagine secondaria
  const handleSwap = (img, setImg) => {
    if (img === copertina) return;

    // Scambio
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
            <Col xs={12} md={5}>
              {" "}
              <div className="d-flex align-items-center justify-content-start title ms-5">
                <div className="d-flex flex-column">
                  <h1 className="mt-5">{project.titolo}</h1>
                  <Button className="mt-5">Git-Hub</Button>
                </div>

                <img src={Mouse} alt="" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex justify-content-end cover">
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
              </div>
              <div className="border-bottom border-2 border-danger mt-3"></div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={5}>
              <div className="description">
                <p style={{ whiteSpace: "pre-line" }}>
                  {project.descrizioneLunga}
                </p>
              </div>
            </Col>
            <Col md={7}>
              <div className="d-flex justify-content-end mt-5">
                <div
                  className="project-card w-50"
                  onClick={() => handleSwap(img1, setImg1)}
                >
                  <img src={img1} alt="" />
                </div>
                <div
                  className="project-card"
                  onClick={() => handleSwap(img2, setImg2)}
                >
                  <img src={img2} alt="" />
                </div>
              </div>
              <div className="video-project d-flex justify-content-center ms-5 mt-5">
                <iframe
                  width="75%"
                  height="300"
                  src="https://www.youtube.com/embed/cYJkoWkW_7Q"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>{" "}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProjectDetail;
