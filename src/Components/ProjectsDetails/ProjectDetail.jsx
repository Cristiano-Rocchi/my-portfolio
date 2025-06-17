import { useParams } from "react-router-dom";
import DataProjects from "../Projects/DataProjects";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProjectDetail.scss";
import Mouse from "../../Assets/Svg/mouse.svg";
import prova from "../../Assets/Img/Websites/Siti/isolotto.png";

function ProjectDetail() {
  const { id } = useParams();
  const project = DataProjects.find((p) => p.id === id);

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
                <img src={project.copertina} alt="" />
              </div>
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
            <Col md={{ span: 6, offset: 1 }}>
              <div className="d-flex gap-5 mt-5">
                <div className="project-card">
                  <img src={prova} alt="" />
                </div>
                <div className="project-card">
                  <img src={prova} alt="" />
                </div>
              </div>
              <div className="video-project ms-5 mt-5">
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
