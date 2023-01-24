import React from "react";

import { Progress, Container, Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/Footer.js";
import ProjectFooterPage from "./Project-Footer.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

function About() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container className="shadow preload">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/NC-Photo copy.PNG")}
              />
            </div>
            <div className="name">
              <div className="name">
                <h1 className="title">
                  Jonathon Riley <br />
                </h1>
              </div>
              <div className="d-flex justify-content-center">
                <h5 className="w-75 p-3">
                  An adaptable, creative Full Stack Developer with three years' experience engaging in all phases of project lifecycles within an agile environment. Currently working within the corporate travel industry as Full Stack JavaScript Developer aiming to drive my career and expertise within the tech industry.
                </h5>
              </div>
            </div>
          </div>

          <SectionCarousel />

          <div className="d-flex justify-content-center">
            <Row>
              <Col>
                <div className="container-fluid">
                  <div className="title">
                    <h2>Software Languages and Frameworks</h2>
                  </div>
                  <br />
                  <div>
                    {" "}
                    Javascript
                    <Progress
                      max="100"
                      value="90"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    Vue
                    <Progress
                      max="100"
                      value="90"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    React
                    <Progress
                      max="100"
                      value="90"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    Node
                    <Progress
                      max="100"
                      value="90"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    Express
                    <Progress
                      max="100"
                      value="90"
                      barClassName="progress-bar-success"
                    />
                  </div>{" "}
                  <div>
                    TypeScript
                    <Progress
                      max="100"
                      value="85"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    Angular
                    <Progress
                      max="100"
                      value="75"
                      barClassName="progress-bar-warning"
                    />
                  </div>
                  <div>
                    {" "}
                    HandleBars
                    <Progress
                      max="100"
                      value="75"
                      barClassName="progress-bar-warning"
                    />
                  </div>
                </div>
                <br />
              </Col>
            </Row>
          </div>
          <ProjectFooterPage />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default About;
