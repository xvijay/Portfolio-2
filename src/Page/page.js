import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { DARK, LIGHT } from "../Helper/constant";

import { About, Work } from "./Section/about";
import Circle from "../Assets/Images/layer1.svg";

const HomePage = ({ themeSelect, theme }) => {
  return (
    <React.Fragment>
      <div className="banner pt-5" style={{ overflow: "hidden" }}>
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
          <div>
            <button
              className="buttonAnimation"
              id="git-in-touch"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Get in Touch
              <div className="overlay"></div>
            </button>
          </div>
        </Container>
      </div>
      {/* ABout ME Section */}
      <About></About>
      {/* About Me Ends Here */}

      {/* Works Section */}
      <Work></Work>

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
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
