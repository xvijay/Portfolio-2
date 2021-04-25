import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { DARK, LIGHT } from "../Helper/constant";

const HomePage = ({ themeSelect, theme }) => {
  return (
    <React.Fragment>
      <div className="banner">
        <Container>
          <h3>Hello There</h3>
          <h1>
            I am Vijay Tripathi<br></br>I am a Web Developer
          </h1>
        </Container>
      </div>
      <div
        className="themeSelector"
        onClick={() => themeSelect(theme === LIGHT ? LIGHT : DARK)}
      >
        <FontAwesomeIcon
          icon={theme === LIGHT ? faLightbulb : faLightbulb}
        ></FontAwesomeIcon>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
