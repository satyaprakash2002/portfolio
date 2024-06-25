/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p className="text-white text-center">
              Satyaprakash's <br /> Portfolio
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/satyaprakash-sarangi/"
                target="blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.instagram.com/satyaprakash_sarangi/"
                target="blank"
              >
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/satyaprakash2002" target="blank">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
