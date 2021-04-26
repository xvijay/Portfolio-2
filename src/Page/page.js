import React from "react";
import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
// import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { DARK, LIGHT } from "../Helper/constant";
// import { Animaton } from "../Helper/helper";
// import nightSky from "../Assets/Images/pexels-francesco-ungaro-998641.jpg";
// import Moon from "../Assets/Images/moon.png";
// import Sun from "../Assets/Images/Sun-1.png";
import Sky from "../Assets/Images/oie_krvGLWj9P622.png";

const HomePage = ({ themeSelect, theme }) => {
  return (
    <React.Fragment>
      <div className="banner" style={{ overflow: "hidden" }}>
        {/* <img
          src={theme === LIGHT ? Sky : nightSky}
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: "0",
          }}
        ></img>
        <img
          src={theme === LIGHT ? Sun : Moon}
          style={{
            width: "150px",
            zIndex: "1",
            position: "absolute",
            right: "300px",
            top: "20%",
          }}
        ></img> */}
        <img
          src={Sky}
          alt="city"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: "0",
            bottom: "-175px",
          }}
        ></img>
        <Container className="position-relative">
          <h3>Hello There</h3>
          <h1>
            I am Vijay Tripathi<br></br>I am a Web Developer
          </h1>
          <div>
            <button
              className="nv__link git-in-touch"
              id="git-in-touch"
              data-title={`Get in Touch`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Get in Touch
            </button>
          </div>
        </Container>
      </div>
      <section className="aboutMe pt-5">
        <div className="title text-center pt-5">
          <h3>About</h3>
          <h2>Personal Info</h2>
          <h4>Get to know more about me</h4>
        </div>
        <Container className="pt-5">
          <div className="d-flex mt-5">
            <div className="pr-5 w-100">
              <h4 className="mb-5">Hello!</h4>
              My name is Vijay Tripathi and I'm a passionate Web Developer using
              web technologies to build amazing products and focusing on solving
              problems for different niches and different industries using the
              power of technology. <br></br>
              <br></br>I will love to hear from you. Whether it's a project, job
              opportunity, or just a chat. Feel free to contact me
            </div>
            <div className="w-100">
              <h4 className="mb-5">Skills</h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                <div className="skill">Reactjs</div>
                <div className="skill">Nodejs</div>
                <div className="skill">SQL</div>
                <div className="skill">MongoDB</div>
                <div className="skill">SASS</div>
                <div className="skill">PHP</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
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
