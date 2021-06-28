import { Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import chatAppImage from "../../Assets/Images/screencapture-chat-app-talk-netlify-app-2021-06-28-18_23_04.png";
import videoAppImage from "../../Assets/Images/screencapture-video-client-app-herokuapp-2021-06-28-18_25_57.png";

export const About = () => {
  return (
    <section
      className="aboutMe pt-5 snap"
      style={{ borderBottom: "1px solid #ebebeb" }}
      id="aboutMe"
    >
      <div className="title text-center pt-5">
        <h3>About</h3>
        <h2>Personal Info</h2>
        <h4>Get to know more about me</h4>
      </div>
      <Container className="pt-5">
        <div className="d-md-flex mt-md-5 mb-5 mb-md-0">
          <div className="pr-5 w-100">
            <h4 className="mb-5">Hello!</h4>
            My name is Vijay Tripathi and I'm a passionate Web Developer using
            web technologies to build amazing products and focusing on solving
            problems for different niches and different industries using the
            power of technology. <br></br>
            <br></br>I will love to hear from you. Whether it's a project, job
            opportunity, or just a chat. Feel free to contact me
          </div>
          <div className="w-100 aboutMe__skills">
            <h4 className="mb-5 mt-5 mt-md-0">Skills</h4>
            <div className="aboutMe__skills__list">
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
  );
};

export const Work = () => {
  return (
    <section className="works position-relative snap" id="works">
      <div className="works__box py-5">
        <div className="title text-center pt-5">
          <h3>Works</h3>
          <h2>Latest Projects</h2>
          <h4>
            Here you can find some of the projects that I created recently
          </h4>
        </div>
        <div className="works__box">
          <div className="position-relative">
            <div
              className="works__cards left up"
              style={{ backgroundImage: `url(${videoAppImage})` }}
            >
              <div className="works__cards__content">
                <div className="works__cards__content__title">Face-to-Face</div>
                <div className="works__cards__content__des">
                  App for video calling
                </div>
                <div className="d-flex">
                  <a
                    href="https://video-client-app.herokuapp.com/"
                    className="cta d-inline-block mr-3"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Visit</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/xvijay/VideoAppClient/"
                    className="cta d-inline-block"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Code</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="overlay"></div>
            </div>
          </div>
          <div
            className="works__cards right"
            style={{ backgroundImage: `url(${chatAppImage})` }}
          >
            <div className="works__cards__content">
              <div className="works__cards__content__title">Chit Chat</div>
              <div className="works__cards__content__des">Free Chating app</div>
              <div className="d-flex">
                <a
                  href="https://chat-app-talk.netlify.app/"
                  className="cta d-inline-block mr-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
                <a
                  href="https://github.com/xvijay/chat-app"
                  className="cta d-inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Code</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <section
      className="footer pt-5 pb-5 position-relative"
      style={{ borderBottom: "1px solid #ebebeb" }}
      id="footer"
    >
      <div className="title text-center pt-5">
        <h3>Contact</h3>
        <h2>Reach Out to me!</h2>
        <h4>Discuss a project or just want to say HI?</h4>
        <h5 className="d-flex justify-content-center">
          <a
            href="https://github.com/xvijay"
            className="mr-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-tripathi-ab348a194/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-3"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <div>
            <a
              href="mailto:vijayxtri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              vijayxtri@gmail.com
            </a>
          </div>
        </h5>
      </div>
      <div
        className="position-absolute"
        style={{ fontSize: "0.75rem", bottom: "0" }}
      >
        Designed and developed by Vijay Tripathi.
      </div>
    </section>
  );
};
