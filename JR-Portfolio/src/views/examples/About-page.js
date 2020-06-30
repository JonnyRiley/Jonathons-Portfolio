import React from "react";

import { Progress, Container, Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
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
              <h5 className="description">
                An adaptable and responsible Business graduate that has recently
                completed an industry-led coding Bootcamp, NorthCoders. I have a
                clear, logical mind with a practical approach to problem solving
                and a drive to see things through to completion. Coding has
                enabled me to further my curiosity into problem solving and how
                the world of tech works.
              </h5>
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
          <Container>
            <div className="section text-center">
              <div className="title">
                <h2>Projects</h2>
              </div>
              <Row>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/milkroom" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/faces/milkroom.png")}
                    />{" "}
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>React Web App</p>
                  </div>
                </Col>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/northcoders" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/ncNews-thumbnail.png")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>React Web App</p>
                  </div>
                </Col>{" "}
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-end</h4>
                  <NavLink to="/reCharge" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/reChargeThumbnail.png")}
                    />
                    <br></br> <br></br>
                  </NavLink>
                  <div className="img-details">
                    <p>Flutter App</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default About;
