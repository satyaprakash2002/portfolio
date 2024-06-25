/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  const education = [
    {
      title: "Bachelor's Degree",
      degree: "Bachelor of Science in Computer Science",
      institution: "SOA University",
      period: "2020 - 2024",
      description:
        "Graduated with honors, specializing in software development and algorithms.",
    },
    {
      title: "High - School",
      degree: "11th nad 12th Science",
      institution: "DAV Public School",
      period: "2018 - 2020",
      description:
        "Developed a strong foundation in mathematics, science, and computer studies. Engaged in various extracurricular activities, including coding clubs and science fairs, fostering a passion for technology and innovation.",
    },
  ];

  return (
    <section className="education py-16 relative" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "{animate__animated animate__fadeIn}" : ""
                  }
                >
                  <h2 className="text-4xl mb-5">Education</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    My educational journey has equipped me with a solid
                    foundation in computer science and software engineering.
                    Here's a snapshot of my academic achievements and the
                    institutions that have shaped my knowledge and skills.
                  </p>
                  <Tab.Container id="education-tabs" defaultActiveKey="edu1">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {education.map((edu, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`edu${index + 1}`}>
                            {edu.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {education.map((edu, index) => (
                        <Tab.Pane eventKey={`edu${index + 1}`} key={index}>
                          <Row className="mb-8">
                            <Col md={3}>
                              <h5 className="text-xl font-semibold">
                                {edu.degree}
                              </h5>
                              <p className="text-gray-500">{edu.period}</p>
                            </Col>
                            <Col md={9}>
                              <h5 className="text-xl font-semibold">
                                {edu.institution}
                              </h5>
                              <p className="text-gray-600">{edu.description}</p>
                            </Col>
                          </Row>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="absolute right-0 top-0 h-full opacity-20 z-[-1]"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
