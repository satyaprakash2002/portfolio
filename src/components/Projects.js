import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chocolexa",
      description: "A cake and Bakery Shop",
      imgUrl: "./images/chocolexa.png",
      url: "http://example.com/chocolexa",
    },
    {
      title: "Brand Collab",
      description: "A influencer brand collaboration platform",
      imgUrl: "./images/brandCollab.png",
      url: "http://example.com/brandcollab",
    },
    {
      title: "Da Soft",
      description: "A service providing company",
      imgUrl: "./images/dasoftLand.png",
      url: "http://example.com/dasoft",
    },
    {
      title: "Bhabani Instrumentals",
      description: "A instruments selling company",
      imgUrl: "./images/bhabani.png",
      url: "http://example.com/bhabani",
    },
    {
      title: "School AI supporter",
      description: "Enhances school management systems",
      imgUrl: "./images/school.png",
      url: "http://example.com/school",
    },
    {
      title: "Modern Design Landing Page",
      description: "Made a modern Landing Page",
      imgUrl: "./images/ochi.png",
      url: "http://example.com/modernlanding",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p className="max-md:text-[10px]">
                    Hello! I'm Satyaprakash, a passionate coder and innovative
                    developer. I specialize in turning complex problems into
                    elegant solutions through code. With a knack for both
                    front-end and back-end development, I bring ideas to life
                    with precision and creativity. My projects reflect my
                    commitment to quality and my continuous quest for
                    improvement. Let's connect and create something
                    extraordinary together!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
