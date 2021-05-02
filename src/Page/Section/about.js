import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <section
      className="aboutMe pt-5"
      style={{ borderBottom: "1px solid #ebebeb" }}
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
    <section className="works position-relative">
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
            <div className="works__cards left">
              <div className="works__cards__content">
                <div className="works__cards__content__title">
                  Video Calling
                </div>
                <div className="works__cards__content__des">
                  App for video calling
                </div>
                <button>Click Me</button>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
          <div className="works__cards right">
            <div className="works__cards__content">
              <div className="works__cards__content__title">Covid Tracker</div>
              <div className="works__cards__content__des">Description</div>
              <button>Click Me</button>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
