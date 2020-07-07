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
                  An adaptable and responsible Business graduate that has
                  recently completed an industry-led coding Bootcamp,
                  NorthCoders. I have a clear, logical mind with a practical
                  approach to problem solving and a drive to see things through
                  to completion. Coding has enabled me to further my curiosity
                  into problem solving and how the world of tech works.
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
                    React
                    <Progress
                      max="100"
                      value="85"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    HTML5
                    <Progress
                      max="100"
                      value="85"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    CSS
                    <Progress
                      max="100"
                      value="85"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    Bootstrap
                    <Progress
                      max="100"
                      value="78"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    NodeJs
                    <Progress
                      max="100"
                      value="78"
                      barClassName="progress-bar-success"
                    />
                  </div>
                  <div>
                    {" "}
                    Express.js
                    <Progress
                      max="100"
                      value="70"
                      barClassName="progress-bar-warning"
                    />
                  </div>{" "}
                  <div>
                    {" "}
                    PostgreSQL
                    <Progress
                      max="100"
                      value="70"
                      barClassName="progress-bar-warning"
                    />
                  </div>
                  <div>
                    {" "}
                    Flutter
                    <Progress
                      max="100"
                      value="70"
                      barClassName="progress-bar-warning"
                    />
                  </div>
                  <div>
                    {" "}
                    Dart
                    <Progress
                      max="100"
                      value="70"
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
