import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const animation = (id) => {
    const docStyle = document.querySelector(`#${id}`).style;
    const aElem = document.querySelector(`#${id}`);
    const boundingClientRect = aElem.getBoundingClientRect();

    aElem.onmousemove = function (e) {
      const x = e.clientX - boundingClientRect.left;
      const y = e.clientY - boundingClientRect.top;

      const xc = boundingClientRect.width / 2;
      const yc = boundingClientRect.height / 2;

      const dx = x - xc;
      const dy = y - yc;

      docStyle.setProperty("--rx", `${dy / -1}deg`);
      docStyle.setProperty("--ry", `${dx / 3}deg`);
    };

    aElem.onmouseleave = function (e) {
      docStyle.setProperty("--ty", "0");
      docStyle.setProperty("--rx", "0");
      docStyle.setProperty("--ry", "0");
    };

    aElem.onmousedown = function (e) {
      docStyle.setProperty("--tz", "-25px");
    };

    document.body.onmouseup = function (e) {
      docStyle.setProperty("--tz", "-12px");
    };
  };
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
                  href="#home"
                  className="nv__link about"
                  onMouseEnter={() => {
                    animation("about");
                  }}
                  id="about"
                  data-title="About"
                ></Nav.Link>
                <Nav.Link
                  href="#home"
                  className="nv__link work"
                  onMouseEnter={() => {
                    animation("work");
                  }}
                  id="work"
                  data-title="Projects"
                ></Nav.Link>
                <Nav.Link
                  href="#home"
                  className="nv__link contact"
                  onMouseEnter={() => {
                    animation("contact");
                  }}
                  id="contact"
                  data-title="Contact Me"
                ></Nav.Link>
                <Nav.Link
                  href="#home"
                  className="nv__link resume d-block d-md-none"
                  onMouseEnter={() => {
                    animation("resume");
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
              </Nav>
            </Navbar.Collapse>
            <div className="navbar-nav d-none d-md-inline">
              <Nav.Link
                href="#home"
                className="nv__link resume"
                onMouseEnter={() => {
                  animation("resume");
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
