import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Animaton } from "../Helper/helper";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="nv">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">Vijay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  href="#aboutMe"
                  className="nv__link about"
                  onMouseEnter={() => {
                    Animaton("about");
                  }}
                  id="about"
                  data-title="About"
                ></Nav.Link>
                <Nav.Link
                  href="#works"
                  className="nv__link work"
                  onMouseEnter={() => {
                    Animaton("work");
                  }}
                  id="work"
                  data-title="Projects"
                ></Nav.Link>
                <Nav.Link
                  href="#footer"
                  className="nv__link contact"
                  onMouseEnter={() => {
                    Animaton("contact");
                  }}
                  id="contact"
                  data-title="Contact Me"
                ></Nav.Link>
                <Nav.Link
                  href="https://drive.google.com/file/d/1u3EbFJXwpa5M3OhWLD652QzmGuzBPhMS/view?usp=sharing"
                  className="nv__link resume-mobile d-block d-md-none"
                  target="_blank"
                  rel="noopener"
                  onMouseEnter={() => {
                    Animaton("resume-mobile");
                  }}
                  id="resume-mobile"
                  data-title={``}
                  style={{
                    color: "#1984ea",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Resume&nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="navbar-nav d-none d-lg-inline">
              <Nav.Link
                href="https://drive.google.com/file/d/1u3EbFJXwpa5M3OhWLD652QzmGuzBPhMS/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="nv__link resume"
                onMouseEnter={() => {
                  Animaton("resume");
                }}
                id="resume"
                data-title={``}
                style={{
                  color: "#1984ea",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Resume&nbsp;
                <FontAwesomeIcon icon={faChevronRight} />
              </Nav.Link>
            </div>
          </Navbar>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
