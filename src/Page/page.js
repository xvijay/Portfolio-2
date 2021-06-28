import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { DARK, LIGHT } from "../Helper/constant";

import { About, Work, Footer } from "./Section/about";
import Circle from "../Assets/Images/layer1.svg";

const HomePage = ({ themeSelect, theme }) => {
  return (
    <React.Fragment>
      <div className="banner pt-5" style={{ overflow: "hidden" }} id="home">
        <img
          className="movingCircle"
          src={Circle}
          style={{ position: "absolute", width: "30%", right: "30px" }}
          alt="clicleImage"
        ></img>
        <Container className="position-relative">
          <h3>Hello There</h3>
          <h1>
            I am Vijay Tripathi<br></br>I am a Web Developer
          </h1>
          <div className="pt-4">
            <a href="#works" className="cta">
              <span>Works</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </Container>
      </div>
      {/* ABout ME Section */}
      <About></About>
      {/* About Me Ends Here */}

      {/* Works Section */}
      <Work></Work>

      {/* Footer Section */}
      <Footer></Footer>

      {/* { Theme selector Starts here} */}

      <div
        className="themeSelector"
        onClick={() => themeSelect(theme === LIGHT ? LIGHT : DARK)}
      >
        <FontAwesomeIcon
          icon={theme === LIGHT ? faLightbulb : faLightbulb}
        ></FontAwesomeIcon>
      </div>
      <div className="socialIcons">
        <a
          href="https://github.com/xvijay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/vijay-tripathi-ab348a194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
