import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  const experience = [
    {
      title: "Specialist Programmer",
      company: "Infosys",
      period: "2024 - Present",
      description:
        "Developed and maintained web applications using React and Node.js. Worked in a team to meet the deadlines and client requirements.",
    },
    {
      title: "Junior Developer Intern",
      company: "Eduis",
      period: "2023 - 2024",
      description:
        "Assisted in the development of internal tools and customer-facing applications. Worked extensively with React and testing.",
    },
  ];

  return (
    <section className="experience py-16 relative" id="experience">
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
                  <h2 className="text-4xl mb-5">Experience</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    Throughout my career, I have gained valuable experience
                    working on a variety of projects and in different roles.
                    Here's a snapshot of my professional journey.
                  </p>
                  <Tab.Container id="experience-tabs" defaultActiveKey="exp1">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {experience.map((exp, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link eventKey={`exp${index + 1}`}>
                            {exp.title}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content>
                      {experience.map((exp, index) => (
                        <Tab.Pane eventKey={`exp${index + 1}`} key={index}>
                          <Row className="mb-8">
                            <Col md={3}>
                              <h5 className="text-xl font-semibold">
                                {exp.company}
                              </h5>
                              <p className="text-gray-500">{exp.period}</p>
                            </Col>
                            <Col md={9}>
                              <p className="text-gray-600">{exp.description}</p>
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
